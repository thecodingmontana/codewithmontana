<script setup lang="ts">
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
  <main class="min-h-screen relative overflow-hidden max-w-7xl mx-auto flex flex-col">
    <Header />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </main>
</template>
