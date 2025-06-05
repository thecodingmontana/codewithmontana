<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

useHead({
  titleTemplate: '%s - Settings | Security',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Settings | Security',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Settings',
    path: `/workspace/settings/general`,
    children: [
      {
        name: 'Security',
        path: `/workspace/settings/security`,
        children: null,
      },
    ],
  })
})
</script>

<template>
  <section>
    Welcome to settings security
  </section>
</template>
