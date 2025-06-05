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
