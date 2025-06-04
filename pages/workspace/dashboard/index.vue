<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})
</script>

<template>
  <section>
    Welcome to my dashboard
  </section>
</template>
