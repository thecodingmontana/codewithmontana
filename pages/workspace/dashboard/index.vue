<script setup lang="ts">
import AllTasksStats from '~/components/workspace/dashboard/AllTasksStats.vue'
import Greetings from '~/components/workspace/dashboard/Greetings.vue'
import WeeklyTasksProductivity from '~/components/workspace/dashboard/WeeklyTasksProductivity.vue'
import ProjectStats from '~/components/workspace/projects/ProjectStats.vue'

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
  <section class="grid grid-cols-1 gap-10 md:grid-cols-4 w-full">
    <div class="col-span-1 md:col-span-2 xl:col-span-3 flex flex-col gap-8 self-start">
      <Greetings />
      <WeeklyTasksProductivity />
    </div>
    <div class="col-span-1 md:col-span-2 xl:col-span-1 self-start flex flex-col gap-8">
      <ProjectStats />
      <AllTasksStats />
    </div>
  </section>
</template>
