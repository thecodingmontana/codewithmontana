<!-- Parent.vue -->
<script setup lang="ts">
import { toast } from 'vue-sonner'
import ProjectColumn from './ProjectColumn.vue'
import type { DBProject, Status } from '~/types'
import { columns } from '~/types'

const projects = ref<Record<string, DBProject[]>>({
  'IDEA': [],
  'TODO': [],
  'IN PROGRESS': [],
  'IN REVIEW': [],
  'COMPLETED': [],
  'ABANDONED': [],
})

const { data } = await useAsyncData('board_view_projects', () =>
  useRequestFetch()('/api/workspace/project/all'),
)

onMounted(() => {
  if (data.value) {
    Object.keys(projects.value).forEach(key => (projects.value[key] = []))

    for (const project of data.value) {
      const key = project.status.toUpperCase()
      if (projects.value[key]) {
        projects.value[key].push({
          ...project,
          createdAt: new Date(project.createdAt),
          updatedAt: new Date(project.updatedAt),
          dueDate: project.dueDate ? new Date(project.dueDate) : null,
          user: {
            avatar: project.user.profilePictureUrl!,
          },
        })
      }
    }
  }
})

watch(data, () => {
  if (data.value) {
    Object.keys(projects.value).forEach(key => (projects.value[key] = []))

    for (const project of data.value) {
      const key = project.status.toUpperCase()
      if (projects.value[key]) {
        projects.value[key].push({
          ...project,
          createdAt: new Date(project.createdAt),
          updatedAt: new Date(project.updatedAt),
          dueDate: project.dueDate ? new Date(project.dueDate) : null,
          user: {
            avatar: project.user.profilePictureUrl!,
          },
        })
      }
    }
  }
}, { immediate: true })

async function handleDrop(columnKey: Status, project: DBProject, index?: number) {
  const list = projects.value[columnKey]
  if (!list) return

  const exists = list.find(p => p.id === project.id)
  if (exists) return

  if (typeof index === 'number') {
    list.splice(index, 0, { ...project, status: columnKey })
  }
  else {
    list.push({ ...project, status: columnKey })
  }

  Object.keys(projects.value).forEach((key) => {
    if (key !== columnKey) {
      if (projects.value[key]) {
        projects.value[key] = projects.value[key]!.filter(p => p.id !== project.id)
      }
    }
  })

  try {
    await $fetch(`/api/workspace/project/${project.id}/update-status`, {
      method: 'PATCH',
      body: { status: columnKey },
    })

    await refreshNuxtData(['sidebar_projects', 'board_view_projects', 'all_project_stats'])
  }
  catch (error: any) {
    const errorMessage = error.response
      ? error.response._data.message
      : error.message

    toast.error(errorMessage, {
      position: 'top-center',
    })
  }
}
</script>

<template>
  <div class="flex overflow-x-scroll gap-5 my-2 scrollbar-hide">
    <ProjectColumn
      v-for="column in columns"
      :key="column.name"
      :column="column"
      :data="projects[column.name.toUpperCase()] ?? []"
      :on-drop="(project, index) => handleDrop(column.name.toUpperCase() as Status, project, index)"
    />
  </div>
</template>
