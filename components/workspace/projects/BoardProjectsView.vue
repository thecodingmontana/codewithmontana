<!-- Parent.vue -->
<script setup lang="ts">
import ProjectColumn from './ProjectColumn.vue'
import type { DBProject, IProjectColumn, Status } from '~/types'

const columns = ref<IProjectColumn[]>([
  { name: 'Idea', description: 'Raw thoughts or concepts not yet acted upon.', icon: 'hugeicons:ai-idea' },
  { name: 'Todo', description: 'Planned projects that are queued and ready to start.', icon: 'solar:clipboard-outline' },
  { name: 'In Progress', description: 'Projects currently being worked on.', icon: 'solar:alarm-outline' },
  { name: 'In Review', description: 'Projects completed but pending evaluation or feedback.', icon: 'solar:minimalistic-magnifer-bug-outline' },
  { name: 'Completed', description: 'Projects fully done and verified.', icon: 'solar:check-circle-outline' },
  { name: 'Abandoned', description: 'Projects intentionally discontinued or no longer relevant.', icon: 'solar:trash-bin-trash-outline' },
])

const projects = ref<Record<string, DBProject[]>>({
  'IDEA': [],
  'TODO': [],
  'IN PROGRESS': [],
  'IN REVIEW': [],
  'COMPLETED': [],
  'ABANDONED': [],
})

const { data } = await useAsyncData('all_projects', () =>
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

  console.log(columnKey, project)

  // try {
  //   await useRequestFetch()(`/api/workspace/project/${project.id}`, {
  //     method: 'PATCH',
  //     body: { status: columnKey },
  //   })
  // }
  // catch (err) {
  //   console.error('Failed to update project status:', err)
  // }
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
