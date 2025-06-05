<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

useHead({
  titleTemplate: '%s - Settings | General',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Settings | General',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Settings',
    path: `/workspace/settings/general`,
    children: [
      {
        name: 'General',
        path: `/workspace/settings/general`,
        children: null,
      },
    ],
  })
})
</script>

<template>
  <section>
    Welcome to settings general
  </section>
</template>
