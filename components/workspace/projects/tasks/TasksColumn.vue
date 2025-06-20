<script setup lang="ts">
import { useDroppable, type IDnDPayload, type IDnDStore } from '@vue-dnd-kit/core'
import { format } from 'date-fns'
import TaskDraggable from './TaskDraggable.vue'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import type { IProjectColumn, Task } from '~/types'
import { Checkbox } from '~/components/ui/checkbox'

const props = defineProps<{
  column: IProjectColumn
  data: Task[]
  onDrop: (item: Task, index?: number) => void
}>()

const modalStore = useModalStore()

function createDropHandler(targetList: Task[], onDrop: (item: Task, index?: number) => void) {
  return {
    data: {
      source: targetList,
      columnId: props.column.name,
    },
    events: {
      onDrop: (store: IDnDStore, payload: IDnDPayload) => {
        const [draggingElement] = payload.items
        const dragData = draggingElement?.data

        if (!dragData || typeof dragData.index !== 'number' || !dragData.source) {
          return
        }

        const { source: draggingSource, index: draggingIndex } = dragData

        // Get the actual task object
        const taskToMove = draggingSource[draggingIndex]

        if (!taskToMove) {
          return
        }

        // Only remove from source if it's a different column
        if (draggingSource !== targetList) {
          draggingSource.splice(draggingIndex, 1)
        }
        else {
          // For reordering within the same column, we need to be more careful
          draggingSource.splice(draggingIndex, 1)
        }

        // Try to determine drop position
        let dropIndex = targetList.length // Default to end

        // Check if we're hovering over a specific element
        const hoveredElement = store.hovered.element.value
        if (
          hoveredElement
          && (hoveredElement as HTMLElement).dataset
          && (hoveredElement as HTMLElement).dataset.index
        ) {
          const hoveredIndex = parseInt((hoveredElement as HTMLElement).dataset.index ?? '')
          if (!isNaN(hoveredIndex)) {
            dropIndex = hoveredIndex
          }
        }

        onDrop(taskToMove, dropIndex)
      },
    },
  }
}

const { elementRef: taskColumnRef, isOvered, isAllowed, isLazyAllowed } = useDroppable(
  createDropHandler(props.data, props.onDrop),
)

const onAddNewTask = () => {
  modalStore?.onOpen('addNewTask')
  modalStore?.setIsOpen(true)
}
</script>

<template>
  <div
    ref="taskColumnRef"
    class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0 self-start grid gap-5"
  >
    <div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-2">
          <Icon :name="props.column.icon" />
          <p>
            {{ props.column.name }}
          </p>
        </div>
        <Icon name="uis:ellipsis-v" />
      </div>
      <p class="text-xs italic text-muted-foreground">
        {{ props.column.description }}
      </p>
    </div>
    <div class="grid gap-1">
      <TaskDraggable
        v-for="(task, index) in props.data"
        :key="`${task.id}-${index}`"
        :index="index"
        :source="props.data"
        :task="task"
      >
        <div class="bg-background p-2.5 rounded-sm shadow space-y-2">
          <div>
            <Badge
              :class="cn(
                'rounded text-xs gap-x-1 flex',
                task.priority === 'MEDIUM' && 'bg-amber-100 dark:bg-amber-100 text-amber-500',
                task.priority === 'LOW' && 'bg-purple-100 dark:bg-purple-100 text-purple-500',
                task.priority === 'HIGH' && 'bg-rose-100 dark:bg-rose-100 text-rose-500',
                task.priority === 'NONE' && 'bg-zinc-100 dark:bg-zinc-100 text-zinc-500',
              )"
            >
              <div
                :class="cn(
                  'rounded-full size-1.5 shrink-0',
                  task.priority === 'MEDIUM' && 'bg-amber-500',
                  task.priority === 'LOW' && 'bg-purple-500',
                  task.priority === 'HIGH' && 'bg-rose-500',
                  task.priority === 'NONE' && 'bg-zinc-500',
                )"
              />
              {{ task.priority }}
            </Badge>
          </div>
          <div>
            <h3
              :class="cn(
                'text-sm font-semibold truncate',
                task.status === 'COMPLETED' && 'line-through text-emerald-600',
                task.status === 'ABANDONED' && 'line-through text-rose-600',
              )"
            >
              {{ task.name }}
            </h3>
            <p
              v-if="task.description"
              :class="cn(
                'text-sm text-muted-foreground',
                task.status === 'COMPLETED' && 'line-through',
                task.status === 'ABANDONED' && 'line-through text-rose-300',
              )"
            >
              {{ task.description }}
            </p>
          </div>
          <div class="grid gap-1.5">
            <div
              v-for="subtask in task.subtasks"
              :key="subtask.id"
              class="flex items-center gap-x-2 text-sm"
            >
              <Checkbox
                v-model="subtask.is_completed"
                disabled
                class="self-start mt-1 size-4 border-zinc-300"
              />
              <p
                :class="cn(
                  'self-start mt-0.5',
                  subtask.is_completed ? 'line-through text-emerald-500' : 'text-muted-foreground',
                )"
              >
                {{ subtask.name }}
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between text-muted-foreground text-sm">
            <div class="flex items-center gap-1">
              <Icon
                name="hugeicons:calendar-02"
                class="size-5 shrink-0 rounded-full"
              />
              <p>
                {{ task.dueDate ? format(new Date(task.dueDate), 'd MMM') : 'Due' }}
              </p>
            </div>
            <p v-if="task.subtasks.length > 0">
              {{ task.subtasks.filter(s => s.is_completed).length }} / {{ task.subtasks.length }}
            </p>
          </div>
        </div>
      </TaskDraggable>
      <div
        v-if="isOvered && isAllowed && isLazyAllowed && props.data.length <= 0"
        class="text-sm font-medium bg-background/50 my-2 p-9 rounded-md"
      />
    </div>
    <Button
      class="w-full gap-2 cursor-pointer dark:hover:bg-[#343434]"
      size="sm"
      variant="outline"
      @click="onAddNewTask"
    >
      <Icon
        name="hugeicons:plus-sign"
        class="size-4"
      />
      Add Task
    </Button>
  </div>
</template>
