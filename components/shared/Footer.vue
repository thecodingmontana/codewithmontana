<script setup lang="ts">
import { motion, AnimatePresence } from 'motion-v'
import { Button } from '../ui/button'
</script>

<template>
  <AnimatePresence>
    <motion.footer
      :initial="{ y: 40, opacity: 0 }"
      :while-in-view="{ y: 0, opacity: 1 }"
      :in-view-options="{ amount: 0.8 }"
      :transition="{ type: 'spring', bounce: 0.4, delay: 0.3 }"
      :exit="{ opacity: 0 }"
      class="w-full mt-28 mx-auto max-w-full md:max-w-4xl lg:max-w-6xl px-5 py-10"
    >
      <div class="w-full flex flex-col justify-start">
        <div class="flex flex-col gap-y-4 md:flex-row items-center md:justify-between w-full">
          <div class="flex flex-col gap-y-4 md:self-start">
            <h3 class="text-5xl">
              Feeling
              <span class="bg-[linear-gradient(288deg,_#ff8000,_#f0c_53.2394%,_#04f)] bg-clip-text text-transparent animate-gradient-x font-nyght tracking-wide">
                Inspired
              </span>
            </h3>
            <div class="flex items-center justify-center md:justify-start group">
              <NuxtLink
                to="https://cal.com/thecodingmontana"
                target="_blank"
                as-child
              >
                <Button class="rounded-full bg-[#c8ff65] text-black hover:bg-[#c8ff65] cursor-pointer">
                  schedule a call
                </Button>
              </NuxtLink>
              <Button
                class="rounded-full -ml-1 bg-[#c8ff65] text-black hover:bg-[#c8ff65] cursor-pointer group-hover:translate-x-3 ease-in-out transition-all duration-500"
                size="icon"
              >
                <Icon
                  name="lucide-arrow-right"
                  class="size-6 -rotate-45 group-hover:rotate-0 ease-in-out transition-all duration-500"
                />
              </Button>
            </div>
          </div>
          <div class="grid gap-2 md:self-start text-center md:text-start">
            <h4 class="text-lg text-semibold">
              Contact Info
            </h4>
            <div class="space-y-1 flex flex-col items-center md:items-start">
              <NuxtLink
                href="tel:+254768879348"
                class="flex items-center gap-x-2"
              >
                <Icon
                  name="solar:phone-outline"
                  size="20"
                />
                <p>
                  +254 768879348
                </p>
              </NuxtLink>
              <NuxtLink
                href="mailto:hello@thecodingmontana.com"
                class="flex items-center gap-x-2"
              >
                <Icon
                  name="solar:mailbox-outline"
                  size="20"
                />
                <p>
                  hello@thecodingmontana.com
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-16 flex flex-col md:flex-row items-center md:justify-between">
          <p>
            ©codewithmontana {{ new Date().getFullYear() }}
          </p>
          <p>
            All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  </AnimatePresence>
</template>
