<script setup lang="ts">
import { toast } from 'vue-sonner'
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

async function handleDrop(columnKey: Status, task: Task, index?: number) {
  const targetList = tasks.value[columnKey]
  if (!targetList) {
    return
  }

  // Check if task already exists in target column
  const existingIndex = targetList.findIndex(p => p.id === task.id)
  if (existingIndex !== -1) {
    // Remove from current position
    targetList.splice(existingIndex, 1)
  }
  else {
    // Remove from all other columns first
    Object.keys(tasks.value).forEach((key) => {
      if (key !== columnKey && tasks.value[key]) {
        const oldIndex = tasks.value[key]!.findIndex(p => p.id === task.id)
        if (oldIndex !== -1) {
          tasks.value[key]!.splice(oldIndex, 1)
        }
      }
    })
  }

  // Update task status
  const updatedTask = { ...task, status: columnKey }

  // Insert at specified index or append to end
  if (typeof index === 'number' && index >= 0) {
    targetList.splice(Math.min(index, targetList.length), 0, updatedTask)
  }
  else {
    targetList.push(updatedTask)
  }
  try {
    await $fetch(`/api/workspace/project/${props?.projectId}/task/${task.id}`, {
      method: 'PATCH',
      body: { status: columnKey },
    })

    await refreshNuxtData([`board_view_project_tasks_${props?.projectId}`])
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
    <TasksColumn
      v-for="column in taskColumns"
      :key="column.name"
      :column="column"
      :data="tasks[column.name.toUpperCase()] ?? []"
      :on-drop="(project, index) => handleDrop(column.name.toUpperCase() as Status, project, index)"
    />
  </div>
</template>
