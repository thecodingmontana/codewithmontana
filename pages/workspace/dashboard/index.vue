<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

useHead({
  titleTemplate: '%s - Dashboard',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Dashboard',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Dashboard',
    path: `/workspace/dashboard`,
    children: null,
  })
})
</script>

<template>
  <section>
    Welcome to my dashboard
  </section>
</template>
