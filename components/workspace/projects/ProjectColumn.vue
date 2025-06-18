<script setup lang="ts">
import { useDroppable, type IDnDPayload, type IDnDStore } from '@vue-dnd-kit/core'
import { format } from 'date-fns'
import Draggable from '~/components/shared/Draggable.vue'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import type { DBProject, IProjectColumn } from '~/types'

const props = defineProps<{
  column: IProjectColumn
  data: DBProject[]
  onDrop: (item: DBProject, index?: number) => void
}>()

function createDropHandler(targetList: DBProject[], onDrop: (item: DBProject, index?: number) => void) {
  return {
    data: {
      source: targetList,
    },
    events: {
      onDrop: (store: IDnDStore, payload: IDnDPayload) => {
        const [draggingElement] = payload.items
        const { source: draggingSource, index: draggingIndex } = draggingElement?.data ?? {}

        if (!draggingSource || draggingIndex === undefined) return

        const [moved] = draggingSource.splice(draggingIndex, 1)

        const hoveredElementNode = store.hovered.element.value
        if (hoveredElementNode) {
          const hoveredElement = store.elementsMap.value.get(hoveredElementNode)
          const { index: hoveredIndex } = hoveredElement?.data ?? {}

          // Always notify parent to insert item at specific position
          onDrop(moved, hoveredIndex)
        }
        else {
          // Empty list or no hover target
          onDrop(moved)
        }
      },
    },
  }
}

const { elementRef: columnRef, isOvered, isAllowed, isLazyAllowed } = useDroppable(createDropHandler(props.data, props.onDrop))
</script>

<template>
  <div
    ref="columnRef"
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
    <div
      class="grid gap-1"
    >
      <TransitionGroup name="list">
        <Draggable
          v-for="(project, index) in props.data"
          :key="project.id"
          :index="index"
          :source="props.data"
        >
          <div
            class="bg-background p-2.5 rounded-sm shadow space-y-2"
          >
            <div>
              <Badge
                :class="cn(
                  'rounded text-xs gap-x-1 flex',
                  project.priority === 'MEDIUM' && 'bg-amber-100 dark:bg-amber-100 text-amber-500',
                  project.priority === 'LOW' && 'bg-purple-100 dark:bg-purple-100 text-purple-500',
                  project.priority === 'HIGH' && 'bg-rose-100 dark:bg-rose-100 text-rose-500',
                  project.priority === 'NONE' && 'bg-zinc-100 dark:bg-zinc-100 text-zinc-500',
                )"
              >
                <div
                  :class="cn(
                    'rounded-full size-1.5 shrink-0',
                    project.priority === 'MEDIUM' && 'bg-amber-500',
                    project.priority === 'LOW' && 'bg-purple-500',
                    project.priority === 'HIGH' && 'bg-rose-500',
                    project.priority === 'NONE' && 'bg-zinc-500',
                  )"
                />
                {{ project.priority }}
              </Badge>
            </div>
            <div>
              <h3>
                {{ project.title }}
              </h3>
              <p
                v-if="project.description"
                class="text-sm text-muted-foreground"
              >
                {{ project.description }}
              </p>
            </div>
            <div>
              <div class="flex items-center gap-1 text-muted-foreground text-sm">
                <Icon
                  name="hugeicons:calendar-02"
                  class="size-5 shrink-0"
                />
                <p>
                  {{ project.dueDate ? format(new Date(2017, 10, 6), 'd MMM') : 'Due' }}
                </p>
              </div>
            </div>
          </div>
        </Draggable>
      </TransitionGroup>
      <div
        v-if="isOvered && isAllowed && isLazyAllowed && props.data.length <= 0"
        class="text-sm font-medium bg-background/50 my-2 p-9 rounded-md"
      />
    </div>
    <Button
      class="w-full gap-2 cursor-pointer dark:hover:bg-[#343434]"
      size="sm"
      variant="outline"
    >
      <Icon
        name="hugeicons:plus-sign"
        class="size-4"
      />
      Add Project
    </Button>
  </div>
</template>
