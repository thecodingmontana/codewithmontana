<script setup lang="ts">
import { useInView, motion } from 'motion-v'
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
  <div ref="domRef">
    <motion.ul
      class="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4"
      :variants="containerVariants"
      initial="hidden"
      :animate="isInView ? 'visible' : 'hidden'"
    >
      <motion.li
        v-for="(stack, index) in props.stacks"
        :key="index"
        :aria-label="stack.name"
        class="md:group relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base"
        :variants="itemVariants"
        :while-hover="{
          scale: 1.05,
          transition: { duration: 0.2 },
        }"
        :while-tap="{ scale: 0.95 }"
      >
        <Icon
          :name="stack.icon"
          class="w-4 duration-300 lg:w-5 h-auto"
        />
        <span>
          {{ stack.name }}
        </span>
      </motion.li>
    </motion.ul>
  </div>
</template>
