<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'

useHead({
  meta: [
    { property: 'og:title', content: `Christopher Odhiambo` },
    {
      name: 'description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    {
      property: 'og:description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    { property: 'og:url', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
    { name: 'twitter:title', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
    {
      name: 'twitter:description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    { name: 'twitter:site', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
  ],
  title: `Christopher Odhiambo`,
})
</script>

<template>
  <main class="min-h-screen relative max-w-8xl overflow-hidden mx-auto flex flex-col">
    <Toaster
      :close-button="true"
      rich-colors
    />
    <div class="flex-1">
      <slot />
    </div>
  </main>
</template>
