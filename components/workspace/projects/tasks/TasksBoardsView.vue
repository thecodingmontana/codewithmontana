<script setup lang="ts">
import TasksColumn from './TasksColumn.vue'
import { taskColumns, type Status, type Task } from '~/types'

const props = defineProps<{
  projectId: string
}>()

const tasks = ref<Record<string, Task[]>>({
  'IDEA': [],
  'TODO': [],
  'IN PROGRESS': [],
  'IN REVIEW': [],
  'COMPLETED': [],
  'ABANDONED': [],
})

const { data } = await useAsyncData(`board_view_project_tasks_${props?.projectId}`, () =>
  useRequestFetch()(`/api/workspace/project/${props?.projectId}/task/all`),
)

watchEffect(() => {
  if (data.value) {
    Object.keys(tasks.value).forEach(key => (tasks.value[key] = []))
    for (const task of data.value) {
      const key = task.status.toUpperCase()
      if (tasks.value[key]) {
        tasks.value[key].push({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          subtasks: (task.subtasks || []).map((subtask: any) => ({
            ...subtask,
            taskId: task.id,
            createdAt: new Date(subtask.createdAt),
            updatedAt: new Date(subtask.updatedAt),
          })),
        })
      }
    }
  }
})

watch(data, () => {
  if (data.value) {
    Object.keys(tasks.value).forEach(key => (tasks.value[key] = []))
    for (const task of data.value) {
      const key = task.status.toUpperCase()
      if (tasks.value[key]) {
        tasks.value[key].push({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          subtasks: (task.subtasks || []).map((subtask: any) => ({
            ...subtask,
            taskId: task.id,
            createdAt: new Date(subtask.createdAt),
            updatedAt: new Date(subtask.updatedAt),
          })),
        })
      }
    }
  }
}, { immediate: true })

async function handleDrop(columnKey: Status, project: Task, index?: number) {
  const list = tasks.value[columnKey]
  if (!list) return

  const exists = list.find(p => p.id === project.id)
  if (exists) return

  if (typeof index === 'number') {
    list.splice(index, 0, { ...project, status: columnKey })
  }
  else {
    list.push({ ...project, status: columnKey })
  }

  Object.keys(tasks.value).forEach((key) => {
    if (key !== columnKey) {
      if (tasks.value[key]) {
        tasks.value[key] = tasks.value[key]!.filter(p => p.id !== project.id)
      }
    }
  })

  // try {
  //   await $fetch(`/api/workspace/project/${project.id}/update-status`, {
  //     method: 'PATCH',
  //     body: { status: columnKey },
  //   })

  //   await refreshNuxtData(['sidebar_projects', 'board_view_projects', 'all_project_stats'])
  // }
  // catch (error: any) {
  //   const errorMessage = error.response
  //     ? error.response._data.message
  //     : error.message

  //   toast.error(errorMessage, {
  //     position: 'top-center',
  //   })
  // }
}
</script>

<template>
  <div class="flex overflow-x-scroll gap-5 my-2 scrollbar-hide">
    <TasksColumn
      v-for="column in taskColumns"
      :key="column.name"
      :column="column"
      :data="tasks[column.name.toUpperCase()] ?? []"
      :on-drop="(project, index) => handleDrop(column.name.toUpperCase() as Status, project, index)"
    />
  </div>
</template>
