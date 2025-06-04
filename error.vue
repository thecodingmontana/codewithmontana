<script setup lang="ts">
import { motion } from 'motion-v'
import { Button } from './components/ui/button'
import type { NuxtError } from '#app'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="mx-auto flex min-h-screen flex-col overflow-hidden dark:bg-neutral-900 xl:overflow-visible">
    <section class="grid flex-1 place-content-center">
      <div
        v-if="error?.statusCode === 500"
        class="flex flex-col items-center gap-5"
      >
        <motion.h2
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :animate="{
            opacity: 1,
            y: 0,
          }"
          :transition="{
            ease: 'easeInOut',
            duration: 0.5,
          }"
          class="text-3xl font-semibold md:text-4xl xl:text-5xl"
        >
          OOPS!
        </motion.h2>
        <Svgs500Error class="h-auto w-80 sm:w-[25rem] md:w-[35rem] xl:w-[40rem]" />
        <motion.button
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :animate="{
            opacity: 1,
            y: 0,
          }"
          :transition="{
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.7,
          }"
          @click="handleError"
        >
          Clear errors
        </motion.button>
      </div>
      <div
        v-if="error?.statusCode === 404"
        class="flex flex-col items-center gap-5"
      >
        <motion.h2
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :animate="{
            opacity: 1,
            y: 0,
          }"
          :transition="{
            ease: 'easeInOut',
            duration: 0.5,
          }"
          class="text-3xl font-semibold md:text-4xl xl:text-5xl"
        >
          OOPS!
        </motion.h2>
        <Svgs404Error class="h-auto w-80 sm:w-[25rem] md:w-[35rem] xl:w-[40rem]" />
        <div class="flex flex-col items-center gap-2">
          <motion.p
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            :transition="{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.5,
            }"
            class="max-w-md text-center text-base text-muted-foreground md:text-xl xl:text-2xl"
          >
            We can't seem to find the page you're looking for.
          </motion.p>
          <motion.div
            :initial="{
              opacity: 0,
              y: 20,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            :transition="{
              ease: 'easeInOut',
              duration: 0.5,
              delay: 0.7,
            }"
          >
            <Button
              class="group flex w-fit items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-all hover:bg-brand-secondary md:text-base cursor-pointer"
              @click="handleError"
            >
              <Icon
                name="solar:arrow-right-outline"
                class="size-5 rotate-[-135deg] transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
              />
              Return Home
            </Button>
          </motion.div>
        </div>
      </div>
      <div v-if="error?.statusCode === 401">
        Session expired!
      </div>
    </section>
  </main>
</template>
