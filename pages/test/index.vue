<script setup lang="ts">
import { ref } from 'vue'
import { useDroppable, type IDnDPayload, type IDnDStore } from '@vue-dnd-kit/core'
import Draggable from '~/components/shared/Draggable.vue'

const firstColumn = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
])

const secondColumn = ref([
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
])

function createDropHandler(targetList: globalThis.Ref<{ id: number, name: string }[], { id: number, name: string }[] | { id: number, name: string }[]>) {
  return {
    data: {
      source: targetList.value,
    },
    events: {
      onDrop: (store: IDnDStore, payload: IDnDPayload) => {
        const hoveredElementNode = store.hovered.element.value
        if (!hoveredElementNode) return

        const hoveredElement = store.elementsMap.value.get(hoveredElementNode)
        const [draggingElement] = payload.items

        const { source: hoveredSource, index: hoveredIndex } = hoveredElement?.data ?? {}
        const { source: draggingSource, index: draggingIndex } = draggingElement?.data ?? {}

        if (!hoveredSource || !draggingSource || draggingIndex === undefined) return

        const [moved] = draggingSource.splice(draggingIndex, 1)
        hoveredSource.splice(hoveredIndex ?? hoveredSource.length, 0, moved)
      },
    },
  }
}

const { elementRef: firstColumnRef } = useDroppable(createDropHandler(firstColumn))
const { elementRef: secondColumnRef } = useDroppable(createDropHandler(secondColumn))
</script>

<template>
  <div class="flex flex-col items-center mt-[7%]">
    <div class="container w-[20rem]">
      <div
        ref="firstColumnRef"
        class="dropzone"
      >
        <TransitionGroup name="list">
          <Draggable
            v-for="(item, index) in firstColumn"
            :key="item.id"
            :index="index"
            :source="firstColumn"
          >
            {{ item.name }}
          </Draggable>
        </TransitionGroup>
      </div>

      <div
        ref="secondColumnRef"
        class="dropzone"
      >
        <TransitionGroup name="list">
          <Draggable
            v-for="(item, index) in secondColumn"
            :key="item.id"
            :index="index"
            :source="secondColumn"
          >
            {{ item.name }}
          </Draggable>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.dropzone {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px dashed rgba(62, 175, 124, 0.3);
  border-radius: 6px;
  background-color: rgba(62, 175, 124, 0.1);
}
.list-move {
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.list-enter-active,
.list-leave-active {
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.list-leave-active {
  position: absolute;
  pointer-events: none;
}
</style>
