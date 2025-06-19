<script setup lang="ts">
import { format } from 'date-fns'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import TasksTabs from '~/components/workspace/projects/tasks/TasksTabs.vue'
import { cn } from '~/lib/utils'
import { columns } from '~/types'

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
      await refreshNuxtData(['sidebar_projects', 'board_view_projects', 'all_project_stat'])
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
      <div class="flex items-center gap-x-3">
        <Avatar class="size-12 rounded-md">
          <AvatarImage
            :src="`https://avatar.vercel.sh/vercel.svg?text=${project?.title?.charAt(0)}`"
            :alt="project?.title"
          />
          <AvatarFallback>
            {{ project?.title?.slice(0, 2).toUpperCase() || 'PR' }}
          </AvatarFallback>
        </Avatar>
        <div class="min-w-0 flex-1">
          <h1 class="text-lg sm:text-xl font-semibold truncate capitalize">
            {{ project?.title }}
          </h1>
          <div class="text-sm text-muted-foreground flex items-center gap-x-3">
            <p>
              Due: <span class="text-primary">{{ project?.dueDate ? format(new Date(project.dueDate), 'PP') : 'N/A' }}</span>
            </p>
            <div class="bg-primary size-1 rounded-full" />
            <div class="flex items-center gap-x-2">
              <p>Status:</p>
              <div class="flex items-center gap-x-1.5 text-primary">
                <Icon
                  :name="project?.priority
                    ? (columns.find(f => f.name.toUpperCase() === project?.status)?.icon || 'hugeicons:ai-idea')
                    : 'hugeicons:ai-idea'"
                />
                <p>{{ project?.status }}</p>
              </div>
            </div>
            <div class="bg-primary size-1 rounded-full" />
            <div class="flex items-center gap-x-2">
              <p>Priority:</p>
              <Badge
                :class="cn(
                  'rounded text-xs gap-x-1 flex',
                  project?.priority === 'MEDIUM' && 'bg-amber-100 dark:bg-amber-100 text-amber-500',
                  project?.priority === 'LOW' && 'bg-purple-100 dark:bg-purple-100 text-purple-500',
                  project?.priority === 'HIGH' && 'bg-rose-100 dark:bg-rose-100 text-rose-500',
                  project?.priority === 'NONE' && 'bg-zinc-100 dark:bg-zinc-100 text-zinc-500',
                )"
              >
                <div
                  :class="cn(
                    'rounded-full size-1.5 shrink-0',
                    project?.priority === 'MEDIUM' && 'bg-amber-500',
                    project?.priority === 'LOW' && 'bg-purple-500',
                    project?.priority === 'HIGH' && 'bg-rose-500',
                    project?.priority === 'NONE' && 'bg-zinc-500',
                  )"
                />
                {{ project?.priority }}
              </Badge>
            </div>
          </div>
        </div>
      </div>
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
      <TasksTabs :project-id="Array.isArray(route.params.projectId) ? route.params.projectId[0]! : route.params.projectId!" />
      <!-- <ProjectTabs />
      <ProjectStats /> -->
    </div>
  </section>
</template>
