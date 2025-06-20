<script setup lang="ts">
import TasksColumn from './TasksColumn.vue'
import { taskColumns, type Status, type Task } from '~/types'
import { mapTasksByStatus, taskHandleDrop } from '~/lib/tasks'

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
    mapTasksByStatus(data.value, tasks)
  }
})

watch(data, () => {
  if (data.value) {
    mapTasksByStatus(data.value, tasks)
  }
}, { immediate: true })

async function handleDrop(columnKey: Status, task: Task, index?: number) {
  taskHandleDrop(columnKey, task, tasks, props?.projectId, index)
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
