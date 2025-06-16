<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue'
import ProjectStats from '~/components/workspace/projects/ProjectStats.vue'
import ProjectTabs from '~/components/workspace/projects/ProjectTabs.vue'

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

const workspaceStore = useWorkspaceStore()
const modalStore = useModalStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Projects',
    path: `/workspace/projects/all`,
    children: [
      {
        name: 'All',
        path: '/workspace/projects/all',
        children: null,
      },
    ],
  })
})

const onAddNewProject = () => {
  modalStore?.onOpen('addNewProject')
  modalStore?.setIsOpen(true)
}
</script>

<template>
  <section class="grid gap-5">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-x-3">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-md p-1.5 bg-[#f1f1f1] dark:bg-[#1d1d1d] flex-shrink-0">
          <SvgsCodeWithMontana class="w-full h-full" />
        </div>
        <div class="min-w-0 flex-1">
          <h1 class="text-lg sm:text-xl font-semibold truncate">
            All Projects
          </h1>
          <p class="text-xs sm:text-sm text-muted-foreground truncate">
            Overview of all projects
          </p>
        </div>
      </div>
      <Button
        class="cursor-pointer bg-brand text-white hover:bg-brand-secondary transition-all duration-500 ease-in-out hover:-translate-y-1.5 w-full sm:w-auto flex-shrink-0"
        @click="onAddNewProject"
      >
        <Icon
          name="solar:folder-with-files-outline"
          class="size-4"
        />
        New Project
      </Button>
    </div>

    <div class="grid md:grid-cols-4 xl:grid-cols-8 gap-10">
      <ProjectTabs />
      <ProjectStats />
    </div>
  </section>
</template>
