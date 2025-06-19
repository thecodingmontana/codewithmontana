<script setup lang="ts">
import { useDraggable } from '@vue-dnd-kit/core'
import { computed } from 'vue'

const { index, source } = defineProps<{
  index: number
  source: any[]
}>()

const { elementRef: elementTaskRef, handleDragStart, isOvered, isDragging } = useDraggable({
  data: computed(() => ({
    index,
    source,
  })),
})
</script>

<template>
  <div
    ref="elementTaskRef"
    :data-index="index"
    :class="{
      'is-over': isOvered,
      'is-dragging': isDragging,
    }"
    class="draggable w-full rounded-md transition-all"
    @pointerdown="handleDragStart"
  >
    <div
      v-if="isOvered"
      class="text-sm font-medium bg-background/50 my-2 p-9 rounded-md"
    />
    <slot />
  </div>
</template>

<style scoped>
.draggable {
  cursor: grab;
  user-select: none;
}

.is-dragging {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
</style>
