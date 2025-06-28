<script setup lang="ts">
import { Button } from '~/components/ui/button'
import ProjectContentEditable from '~/components/workspace/projects/ProjectContentEditable.vue'
import TasksTabs from '~/components/workspace/projects/tasks/TasksTabs.vue'
import TaskStats from '~/components/workspace/projects/tasks/TaskStats.vue'
import type { Status, Priority } from '~/types'

definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const modalStore = useModalStore()

const { data: project, status } = await useAsyncData(
  `project-${route.params.projectId}`,
  () => useRequestFetch()(`/api/workspace/project/${route.params.projectId}/info`),
)

watchEffect(async () => {
  if (status.value === 'success') {
    if (!project.value) {
      navigateTo('/workspace/projects/all')
      await refreshNuxtData(['sidebar_projects', 'board_view_projects', 'all_project_stat', 'mobile_sidebar_projects'])
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

useHead({
  titleTemplate: `Project - ${project.value?.title}`,
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: `Project - ${project.value?.title}`,
  description: project.value?.description ? project.value.description : 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const onAddNewTask = () => {
  modalStore?.onOpen('addNewTask')
  modalStore?.setIsOpen(true)
  modalStore?.setModalData({
    projectId: Array.isArray(route.params.projectId) ? route.params.projectId[0] : route.params.projectId!,
  })
}
</script>

<template>
  <section class="grid gap-5">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <ProjectContentEditable
        v-if="project"
        :project="{
          ...project,
          createdAt: new Date(project.createdAt),
          updatedAt: new Date(project.updatedAt),
          dueDate: project.dueDate ? new Date(project.dueDate) : null,
        }"
      />
      <Button
        class="cursor-pointer bg-brand text-white hover:bg-brand-secondary transition-all duration-500 ease-in-out hover:-translate-y-1.5 w-full sm:w-auto flex-shrink-0"
        @click="onAddNewTask"
      >
        <Icon
          name="hugeicons:task-add-01"
          class="size-4"
        />
        New Task
      </Button>
    </div>

    <div class="grid md:grid-cols-4 xl:grid-cols-8 gap-10">
      <TasksTabs
        :project="{
          id: Array.isArray(route.params.projectId) ? route.params.projectId[0]! : route.params.projectId!,
          title: project?.title || '',
          status: project?.status as Status,
          priority: project?.priority as Priority,
          dueDate: project?.dueDate ? new Date(project.dueDate) : null,
        }"
      />
      <TaskStats :project-id="Array.isArray(route.params.projectId) ? route.params.projectId[0]! : route.params.projectId!" />
    </div>
  </section>
</template>
