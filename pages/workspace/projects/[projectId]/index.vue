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

const route = useRoute()
const workspaceStore = useWorkspaceStore()

// Fetch project info safely
const { data: project, status } = await useAsyncData(
  `project-${route.params.projectId}`,
  () => useRequestFetch()(`/api/workspace/project/${route.params.projectId}/info`), {
    transform(input) {
      return {
        ...input,
        fetchedAt: new Date(),
      }
    },
    getCachedData(key, nuxtApp) {
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      // If data is not fetched yet
      if (!data) {
      // Fetch the first time
        return
      }

      // Check if the data is older than 5 minutes
      const expirationDate = new Date(data.fetchedAt)
      expirationDate.setTime(expirationDate.getTime() + 5 * 60 * 1000) // 5 minutes TTL
      const isExpired = expirationDate.getTime() < Date.now()
      if (isExpired) {
      // Refetch the data
        return
      }

      return data
    },
  },
)

// Redirect if no project found
onBeforeMount(() => {
  if (status.value === 'success') {
    if (!project.value) {
      navigateTo('/workspace/projects/all')
    }
    else {
      workspaceStore?.onSetWorkspaceBreadcrumb({
        name: 'Projects',
        path: `/workspace/projects/all`,
        children: [
          {
            name: project.value.title!,
            path: `/workspace/projects/${project.value.id}`,
            children: null,
          },
        ],
      })
    }
  }
})
</script>

<template>
  <div>
    Welcome to {{ project?.title }}
  </div>
</template>
