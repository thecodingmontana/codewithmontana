<script setup lang="ts">
import Button from '~/components/ui/button/Button.vue'
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
</script>

<template>
  <section class="grid gap-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-x-2">
        <div class="w-[3.5rem] h-auto rounded-md p-1.5 bg-[#f1f1f1] dark:bg-[#1d1d1d]">
          <SvgsCodeWithMontana class="w-full h-full" />
        </div>
        <div>
          <h1 class="text-xl font-semibold">
            All Projects
          </h1>
          <p class="text-sm text-muted-foreground">
            Overview of all projects
          </p>
        </div>
      </div>
      <Button class="cursor-pointer bg-brand text-white hover:bg-brand-secondary transition-all duration-500 ease-in-out hover:-translate-y-1.5">
        <Icon
          name="solar:folder-with-files-outline"
          class="size-4"
        />
        <span>
          New Project
        </span>
      </Button>
    </div>
    <ProjectTabs />
  </section>
</template>
