<script setup lang="ts">
import Hero from '~/components/hero/Hero.vue'
import SecretSauce from '~/components/skills/SecretSauce.vue'
import CuratedWork from '~/components/work/CuratedWork.vue'

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Christopher Odhiambo',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})
</script>

<template>
  <div>
    <Hero />
    <CuratedWork />
    <SecretSauce />
  </div>
</template>
