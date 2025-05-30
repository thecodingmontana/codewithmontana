<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
import { cn } from '~/lib/utils'
import type { Project } from '~/types'

const props = defineProps<{
  project: Project
}>()

const project = computed(() => {
  return props?.project
})

const generateColorVariations = (baseColor: string) => {
  const hex = baseColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  return {
    dark: `rgb(${Math.floor(r * 0.3)}, ${Math.floor(g * 0.3)}, ${Math.floor(b * 0.3)})`,
    medium: baseColor,
    light: `rgb(${Math.min(255, r + 60)}, ${Math.min(255, g + 60)}, ${Math.min(
      255,
      b + 60,
    )})`,
    lighter: `rgb(${Math.min(255, r + 120)}, ${Math.min(255, g + 120)}, ${Math.min(
      255,
      b + 120,
    )})`,
  }
}

const colorVariations = computed(() => {
  return props.project.color
    ? generateColorVariations(props.project.color)
    : {
        dark: 'rgb(107, 13, 51)',
        medium: 'rgb(219, 39, 119)',
        light: 'rgb(244, 114, 182)',
        lighter: 'rgb(249, 215, 147)',
      }
})
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
        <NuxtLink
          draggable="false"
          class="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl md:h-[460px] lg:h-[560px] md:rounded-3xl md:p-2"
          :to="project.website ? project.website : project.github"
          target="_blank"
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
              :style="{
                background: `linear-gradient(
      188.62deg,
      ${colorVariations.dark} 49.9%,
      ${colorVariations.medium} 81.7%,
      ${colorVariations.light} 93.88%,
      ${colorVariations.lighter} 113.5%
    )`,
              }"
            />
            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              :style="{
                background: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 20%,
      rgb(255, 255, 255) 50%,
      rgba(0, 0, 0, 0) 80%
    )`,
              }"
            />
            <div
              :class="
                cn(
                  'w-full flex-row items-center justify-between px-12 py-8 flex',
                )
              "
              :style="{
                color: project.color ? `${project.color}` : '#f9a8d4', // 33 is 20% opacity in hex
              }"
            >
              <h3 class="max-w-[90%] text-base lg:text-2xl">
                {{ project.tagline }}
              </h3>
              <Icon
                name="lucide-arrow-right"
                class="size-6"
                size="25"
              />
            </div>
            <img
              :alt="project.name"
              loading="lazy"
              width="1203"
              height="753"
              decoding="async"
              data-nimg="1"
              class="md:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform md:block md:rotate-0 md:group-hover:scale-[1.08] md:group-hover:-rotate-3"
              :style="{
                boxShadow: project.color
                  ? `0 0 30px ${project.color}`
                  : '0 0 30px #DB2777',
              }"
              :src="project.image_url ? project.image_url : '/images/vue-twitter.png'"
              style="color: transparent"
            >
          </div>
        </NuxtLink>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
