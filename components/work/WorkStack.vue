<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import type { TechStack } from '~/types'

const props = defineProps<{
  stacks: TechStack[]
}>()

const domRef = ref()
const isInView = useInView(domRef)

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
</script>

<template>
  <div
    ref="domRef"
    class="mt-10"
  >
    <motion.div
      :variants="containerVariants"
      initial="hidden"
      :animate="isInView ? 'visible' : 'hidden'"
      class="flex flex-wrap gap-3 text-sm"
    >
      <motion.div
        v-for="(stack, index) in props.stacks"
        :key="index"
        class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
        :variants="itemVariants"
        :while-hover="{
          scale: 1.05,
          transition: { duration: 0.2 },
        }"
        :while-tap="{ scale: 0.95 }"
      >
        <Icon
          :aria-label="stack.name"
          :name="stack.icon"
        />
        {{ stack.name }}
      </motion.div>
    </motion.div>
  </div>
</template>
