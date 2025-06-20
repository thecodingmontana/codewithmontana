import type { IDnDPayload, IDnDStore } from '@vue-dnd-kit/core'
import type { Task } from '~/types'

export function createTaskDropHandler(targetList: Task[], onDrop: (item: Task, index?: number) => void, columnId: string) {
  return {
    data: {
      source: targetList,
      columnId,
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
