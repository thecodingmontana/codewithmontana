<script setup lang="ts">
import { motion } from 'motion-v'
import CopyToClipboard from '../shared/CopyToClipboard.vue'
</script>

<template>
  <section class="relative xl:py-16">
    <div
      class="relative z-20 mx-auto xl:mt-36 mb-2 flex max-w-full flex-col items-center justify-center px-3 md:mt-48 md:max-w-4xl lg:max-w-5xl"
    >
      <motion.h1
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.5, duration: 1.8, easing: 'ease-out' }"
        class="my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100"
      >
        <span class="md:text-nowrap">Passionate creating great</span>
        <br class="hidden md:block">
        experiences on
        <motion.span
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.8, duration: 1.5 }"
          class="bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide"
        >
          web & mobile
        </motion.span>
        .
      </motion.h1>

      <motion.p
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.2, duration: 1.5 }"
        class="text-muted-foreground dark:text-white relative z-10 mt-4 mb-7 max-w-xl flex flex-col items-center justify-center text-center sm:flex-row md:text-xl lg:mt-7"
      >
        <span class="grad-white flex items-center justify-center">
          Hello, I'm Christopher Odhiambo, Software Engineer.
          I focus on crafting beautiful experiences on both web and mobile
          that are easy to use, enjoyable, and get the job done.
        </span>
      </motion.p>

      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.5, duration: 1.5 }"
        class="z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10"
      >
        <NuxtLink
          to="https://cal.com/thecodingmontana"
          target="_blank"
          class="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-[#c8ff65] dark:bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1"
        >
          <span class="z-10 px-3 text-primary dark:hover:text-black dark:text-white transition-colors duration-300 group-hover:text-black">
            Book a call
          </span>
          <span class="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
          <span
            class="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </NuxtLink>
        <CopyToClipboard text="hello@thecodingmontana.com" />
      </motion.div>
    </div>
  </section>
</template>
