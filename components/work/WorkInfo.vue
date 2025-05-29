<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
import type { Project } from '~/types'

const pros = defineProps<{
  project: Project
}>()

const project = computed(() => {
  return pros?.project
})
</script>

<template>
  <AnimatePresence>
    <motion.div
      :initial="{ opacity: 0, y: 10 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ amount: 0.5 }"
      :transition="{ type: 'spring', bounce: 0.2 }"
      class="sticky top-40"
    >
      <div
        class="flex"
      >
        <div
          aria-hidden="true"
          class="my-4 mr-4 h-1 min-w-6 rounded-full"
          :style="{
            backgroundColor: project.color || '#F97316',
          }"
        />
        <div class="flex flex-col items-start lg:h-[500px]">
          <div class="flex items-center gap-3">
            <h3 class="text-foreground text-2xl font-bold">
              {{ project.name }}
            </h3>
          </div>
          <p class="text-muted-foreground my-2 text-base font-light">
            {{ project.description }}
          </p>
          <ul
            v-for="(highlight, index) in project.highlights"
            :key="index"
            class="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base"
          >
            <li class="flex items-center text-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="mt-1 mr-2 size-5 shrink-0 bg-pink-600/20 lg:bg-black"
                :fill="project.color"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
              </svg>
              {{ highlight }}
            </li>
          </ul>
          <div class="mt-10 flex flex-wrap gap-3 text-sm">
            <div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Next.js"
                src="https://cdn.simpleicons.org/nextdotjs/white"
              >Next.js
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="React"
                src="https://cdn.simpleicons.org/react"
              >React
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Tailwind CSS"
                src="https://cdn.simpleicons.org/tailwindcss"
              >Tailwind CSS
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="TypeScript"
                src="https://cdn.simpleicons.org/typescript"
              >TypeScript
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Framer Motion"
                src="https://cdn.simpleicons.org/framer"
              >Framer Motion
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Sanity cms"
                src="https://cdn.simpleicons.org/sanity"
              >Sanity cms
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Auth.js"
                src="https://cdn.simpleicons.org/nextdns"
              >Auth.js
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="markdown"
                src="https://cdn.simpleicons.org/markdown/lightblue"
              >markdown
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="GROQ"
                src="https://cdn.simpleicons.org/zod"
              >GROQ
            </div><div
              class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
              style="opacity: 1; transform: none;"
            >
              <img
                height="16"
                width="16"
                alt="Sentry"
                src="https://cdn.simpleicons.org/sentry/violet"
              >Sentry
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
