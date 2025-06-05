<script setup lang="ts">
import MFAWrapper from '~/components/auth/2fa/MFAWrapper.vue'

definePageMeta({
  layout: 'auth',
  middleware: ['authenticated'],
})

useHead({
  titleTemplate: '%s - Two Factor',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Two Factor Authentication',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})
</script>

<template>
  <section class="grid min-h-screen place-content-center">
    <MFAWrapper />
  </section>
</template>
