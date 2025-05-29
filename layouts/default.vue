<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'

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

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Christopher Odhiambo',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})
</script>

<template>
  <main class="min-h-screen relative max-w-8xl overflow-hidden mx-auto flex flex-col">
    <Toaster
      :close-button="true"
      rich-colors
    />
    <Header />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </main>
</template>
