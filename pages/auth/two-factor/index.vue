<script setup lang="ts">
import MFAWrapper from '~/components/auth/2fa/MFAWrapper.vue'

definePageMeta({
  layout: 'auth',
  middleware: ['authenticated'],
})
</script>

<template>
  <section class="grid min-h-screen place-content-center">
    <MFAWrapper />
  </section>
</template>
