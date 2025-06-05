<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
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
