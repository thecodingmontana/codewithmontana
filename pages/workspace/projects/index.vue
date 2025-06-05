<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
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
