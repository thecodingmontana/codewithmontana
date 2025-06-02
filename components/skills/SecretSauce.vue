<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
import TechStack from './TechStack.vue'
import { techStack } from '~/data/projects'
</script>

<template>
  <section
    id="skills"
    class="relative mx-auto mt-10 mb-16 flex h-full flex-col rounded-3xl py-0 md:px-10"
  >
    <div class="relative mx-auto size-fit overflow-hidden">
      <div
        class="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)] [masak-image:linear-gradient(to_top,transparent,#000_100%)]"
      >
        <AnimatePresence>
          <motion.div
            :initial="{ rotate: 0, opacity: 0 }"
            :animate="{
              rotate: [0, 360],
              opacity: 1,
            }"
            :exit="{
              rotate: [null, 180],
              opacity: 0,
            }"
            :transition="{
              rotate: {
                duration: 8,
                ease: 'linear',
                repeat: Infinity,
              },
              opacity: {
                duration: 0.5,
              },
            }"
            class="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40"
          >
            <img
              src="/images/steel-flower.webp"
              draggable="false"
              alt="skills cover rotating image"
              class="z-10 w-full opacity-65 select-none"
            >
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <h2
      style="
        text-shadow: 0px 4px 8px rgba(255, 255, 255, 0.05),
          0px 8px 30px rgba(255, 255, 255, 0.25);
      "
      class="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center z-30 mb-0 md:mb-0 size-full -translate-y-6 md:-translate-y-10"
    >
      <p
        class="mb-3 text-xs font-normal tracking-widest dark:text-white/70 uppercase md:text-sm"
      >
        My Skills
      </p>
      <span class="">
        <span class="">The Secret</span>
        <span
          class="bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide"
        >
          Sauce
        </span>
      </span>
    </h2>
    <TechStack :stacks="techStack" />
  </section>
</template>
