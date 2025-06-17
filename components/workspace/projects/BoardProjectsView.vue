<script setup lang="ts">
import ProjectColumn from './ProjectColumn.vue'
import type { IProjectColumn } from '~/types'

const columns = ref<IProjectColumn[]>([
  {
    name: 'Idea',
    description: 'Raw thoughts or concepts not yet acted upon.',
    icon: 'hugeicons:ai-idea',
  },
  {
    name: 'Todo',
    description: 'Planned projects that are queued and ready to start.',
    icon: 'solar:clipboard-outline',
  },
  {
    name: 'In Progress',
    description: 'Projects currently being worked on.',
    icon: 'solar:alarm-outline',
  },
  {
    name: 'In Review',
    description: 'Projects completed but pending evaluation or feedback.',
    icon: 'solar:minimalistic-magnifer-bug-outline',
  },
  {
    name: 'Completed',
    description: 'Projects fully done and verified.',
    icon: 'solar:check-circle-outline',
  },
  {
    name: 'Abandoned',
    description: 'Projects intentionally discontinued or no longer relevant.',
    icon: 'solar:trash-bin-trash-outline',
  },
])

const { data: projects, error, status } = await useAsyncData('all_projects', () => useRequestFetch()('/api/workspace/project/all'))

console.log(projects.value, error.value, status.value)
</script>

<template>
  <div class="flex overflow-x-scroll gap-5 my-2 scrollbar-hide">
    <ProjectColumn
      v-for="column in columns"
      :key="column.name"
      :column="column"
      :data="(projects ?? [])
        .filter(project => project.status === column.name.toUpperCase())
        .map(project => ({
          ...project,
          createdAt: new Date(project.createdAt),
          updatedAt: new Date(project.updatedAt),
          dueDate: project.dueDate ? new Date(project.dueDate) : null,
          user: {
            avatar: project.user.profilePictureUrl!,
          },
        }))"
    />
  </div>
</template>
