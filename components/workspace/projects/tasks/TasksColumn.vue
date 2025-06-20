<script setup lang="ts">
import { useDroppable } from '@vue-dnd-kit/core'
import TaskDraggable from './TaskDraggable.vue'
import Task from './Task.vue'
import { Button } from '~/components/ui/button'
import type { IProjectColumn, Task as ITask } from '~/types'
import { createTaskDropHandler } from '~/lib/tasks'

const props = defineProps<{
  column: IProjectColumn
  data: ITask[]
  onDrop: (item: ITask, index?: number) => void
}>()

const modalStore = useModalStore()

const { elementRef: taskColumnRef, isOvered, isAllowed, isLazyAllowed } = useDroppable(
  createTaskDropHandler(props.data, props.onDrop, props.column.name),
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
      <div
        v-for="(task, index) in props.data"
        :key="`${task.id}-${index}`"
        @click="console.log('Task clicked:', task.id)"
      >
        <TaskDraggable
          :index="index"
          :source="props.data"
          :task="task"
        >
          <Task :task="task" />
        </TaskDraggable>
      </div>
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
