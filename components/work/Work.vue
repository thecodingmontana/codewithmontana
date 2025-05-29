<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
</script>

<template>
  <AnimatePresence>
    <motion.div
      :initial="{ scale: 0.8, y: 10, opacity: 0 }"
      :while-in-view="{ scale: 1, y: 0, opacity: 1 }"
      :in-view-options="{ amount: 0.5 }"
      :transition="{ type: 'spring', bounce: 0.4 }"
      :exit="{ opacity: 0 }"
      class="project-card flex w-full flex-row md:col-span-1 lg:col-span-2"
    >
      <div class="flex flex-col md:mx-10 md:w-full">
        <a
          draggable="false"
          class="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:h-[460px] lg:h-[560px] md:rounded-3xl md:p-2"
          href="/projects/next-venture"
        >
          <div
            class="absolute inset-x-0 top-0 h-px"
            style="
              background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0) 5%,
                rgba(255, 255, 255, 0.8) 35%,
                rgb(255, 255, 255) 50%,
                rgba(255, 255, 255, 0.8) 65%,
                rgba(0, 0, 0, 0) 95%
              );
            "
          />
          <div
            class="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl md:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300"
          >
            <div
              class="absolute inset-0 -z-1"
              style="
                background: linear-gradient(
                  188.62deg,
                  rgb(107, 13, 51) 49.9%,
                  rgb(219, 39, 119) 81.7%,
                  rgb(244, 114, 182) 93.88%,
                  rgb(249, 215, 147) 113.5%
                );
              "
            />
            <div
              class="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0) 20%,
                  rgb(255, 255, 255) 50%,
                  rgba(0, 0, 0, 0) 80%
                );
              "
            />
            <div
              class="hidden w-full flex-row items-center justify-between px-12 py-8 md:flex text-pink-300"
            >
              <h3 class="max-w-[90%] text-xl lg:text-2xl">
                A online space for entrepreneurs to pitch ideas, explore others, and gain
                exposure with clean design.
              </h3>
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
                class="lucide lucide-arrow-right size-6"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <img
              alt="Next Ventures"
              loading="lazy"
              width="1203"
              height="753"
              decoding="async"
              data-nimg="1"
              class="md:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform md:block md:rotate-0 md:group-hover:scale-[1.08] md:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]"
              srcset="
                https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnext-venture.9ff457d3.webp&amp;w=1200&amp;q=75 1x
              "
              src="https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnext-venture.9ff457d3.webp&amp;w=1200&amp;q=75"
              style="color: transparent"
            >
          </div>
        </a>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
