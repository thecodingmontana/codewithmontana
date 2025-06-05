<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

useHead({
  titleTemplate: '%s - Projects',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Projects',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Projects',
    path: `/workspace/projects`,
    children: null,
  })
})
</script>

<template>
  <section>
    Welcome to my projects
  </section>
</template>
