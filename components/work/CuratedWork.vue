<script setup lang="ts">
import { motion } from 'motion-v'
import WorkInfo from './WorkInfo.vue'
import Work from './Work.vue'
</script>

<template>
  <section
    class="relative mx-auto mt-28 w-full max-w-7xl py-10"
  >
    <motion.h2
      :initial="{ opacity: 0, y: 50 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ amount: 0.8 }"
      :transition="{ type: 'spring', bounce: 0.4 }"
      class="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-balance text-center"
      style="text-shadow: rgba(255, 255, 255, 0.05) 0px 4px 8px rgba(255, 255, 255, 0.25) 0px 8px 30px;"
    >
      <p class="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
        FEATURED CASE STUDIES
      </p><span class=""><span class="">Curated</span> <span class="bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">work</span></span>
    </motion.h2>
    <div class="grid gap-16">
      <div class="relative mx-auto w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
        <Work />
        <WorkInfo />
      </div>
      <div class="relative mx-auto w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
        <Work />
        <WorkInfo />
      </div>
    </div>
  </section>
</template>
