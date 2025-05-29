<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <motion.header
    :initial="{
      opacity: 0,
      y: -30,
    }"
    :animate="{
      opacity: 1,
      y: 0,
    }"
    :transition="{
      duration: 0.4,
      delay: 0.5,
    }"
    class="fixed top-3 left-0 right-0 flex flex-col items-center z-50"
  >
    <div class="w-fit rounded-full backdrop-blur-md flex">
      <nav
        class="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
      >
        <div style="position:relative">
          <ul
            class="group flex-1 list-none items-center justify-center gap-1 relative rounded-full border border-white/10 bg-white/5 px-1.5 py-1 flex"
            dir="ltr"
          >
            <li
              class="relative"
            >
              <NuxtLink
                to="/"
                class="focus:text-white data-[active=true]:text-white ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&amp;_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&amp;_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
              >
                <Icon
                  name="hugeicons:home-03"
                  class="size-5"
                />
              </NuxtLink>
              <div
                class="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full"
                style="opacity: 1;"
              >
                <div class="bg-white absolute -top-2.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                  <div class="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md" /><div class="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md" /><div class="bg-primary/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm" />
                </div>
              </div>
            </li>
            <li
              data-slot="navigation-menu-item"
              class="relative"
            >
              <NuxtLink
                to="https://github.com/thecodingmontana"
                target="_blank"
                class="group h-9 w-max items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 group inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
              >
                <Icon
                  name="i-simple-icons-github"
                  class="size-5"
                />
              </NuxtLink>
            </li>
            <li
              data-slot="navigation-menu-item"
              class="relative"
            >
              <NuxtLink
                to="https://x.com/codewithmontana"
                target="_blank"
                class="group h-9 w-max items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 group inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                data-radix-collection-item=""
              >
                <Icon
                  name="i-simple-icons-x"
                  class="size-5"
                />
              </NuxtLink>
            </li>
            <li
              class="relative"
            >
              <NuxtLink
                to="https://cal.com/thecodingmontana"
                target="_blank"
                class="items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 shadow-sm has-[>svg]:px-3 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light whitespace-nowrap text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90"
              >
                Book a Call<div
                  aria-hidden="true"
                  class="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
                />
              </NuxtLink>
            </li>
          </ul>
        </div><div class="absolute top-full left-0 isolate z-50 flex justify-center" />
      </nav>
    </div>
  </motion.header>
</template>
