<script setup lang="ts">
import { motion } from 'motion-v'
import WorkInfo from './WorkInfo.vue'
import Work from './Work.vue'
import { projects } from '~/data/projects'
</script>

<template>
  <section class="relative mx-auto mt-28 w-full max-w-7xl py-10">
    <AnimatePresence>
      <motion.h2
        :exit="{ opacity: 0 }"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.5, duration: 1.8, easing: 'ease-out', type: 'spring' }"
        class="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-balance text-center"
        style="
          text-shadow: rgba(255, 255, 255, 0.05) 0px 4px 8px rgba(255, 255, 255, 0.25) 0px
            8px 30px;
        "
      >
        <p
          class="mb-3 text-xs font-normal tracking-widest text-muted-foreground dark:text-white/70 uppercase md:text-sm"
        >
          FEATURED CASE STUDIES
        </p>
        <span>
          <span>Curated</span>
          <span
            class="bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide ml-1"
          >
            work
          </span>
        </span>
      </motion.h2>
    </AnimatePresence>
    <div class="grid gap-16">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative mx-auto w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-5"
      >
        <Work :project="project" />
        <WorkInfo :project="project" />
      </div>
    </div>
    <NuxtLink
      class="group flex w-fit items-center justify-center gap-2 dark:text-neutral-300 group-hover:text-neutral-100 mx-auto md:mt-20"
      to="https://github.com/thecodingmontana"
      target="_blank"
    >See more projects
      <div
        class="size-6 overflow-hidden rounded-full border border-white/10 bg-white/5 duration-500 group-hover:bg-white/10"
      >
        <div
          class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
        >
          <span class="flex size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right m-auto size-[14px]"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <span class="flex size-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right m-auto size-[14px]"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>
