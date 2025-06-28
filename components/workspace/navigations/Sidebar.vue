<script setup lang="ts">
import User from './User.vue'
import ToggleTheme from './ToggleTheme.vue'
import { ScrollArea } from '~/components/ui/scroll-area'
import type { WorkspaceBreadcrumb } from '~/types'

const workspaceStore = useWorkspaceStore()
const modalStore = useModalStore()

const isOpenSidebar = computed(() => {
  return workspaceStore?.isOpenSidebar
})

const onNavigateToPage = (payload: WorkspaceBreadcrumb, pageName: string) => {
  workspaceStore?.onSetWorkspaceBreadcrumb(payload)
  navigateTo(`/workspace/${pageName}`)
}

const onAddNewProject = () => {
  modalStore?.onOpen('addNewProject')
  modalStore?.setIsOpen(true)
}

const { data: projects } = await useAsyncData('sidebar_projects', () => useRequestFetch()('/api/workspace/project/all'))
</script>

<template>
  <div
    class="fixed top-0 z-20 h-screen shrink-0 bg-[#fafafa] transition-all duration-300 dark:bg-[#1d1d1d] md:block"
    :class="{ 'w-0': !isOpenSidebar, 'hidden p-1 md:w-72': isOpenSidebar }"
  >
    <div
      class="relative flex h-full flex-col"
      :class="{ 'opacity-0': !isOpenSidebar, 'opacity-100': isOpenSidebar }"
    >
      <div class="w-full bg-transparent dark:bg-[#1d1d1d]">
        <User />
      </div>
      <ScrollArea class="flex-1 h-full py-3 space-y-3">
        <div
          class="flex flex-col"
        >
          <button
            class="flex w-full items-center gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
            @click="onNavigateToPage({
              name: 'Dashboard',
              path: `/workspace/dashboard`,
              children: null,
            }, 'dashboard')"
          >
            <Icon
              name="solar:home-angle-2-outline"
              class="size-4"
            />
            Dashboard
          </button>
        </div>
        <div class="grid">
          <h3 class="p-2 text-xs text-muted-foreground">
            Projects
          </h3>
          <div>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
              @click="onAddNewProject"
            >
              <Icon
                name="solar:add-folder-outline"
                class="size-4"
              />
              New Project
            </button>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
              @click="onNavigateToPage({
                name: 'Projects',
                path: `/workspace/projects/all`,
                children: [
                  {
                    name: 'All',
                    path: `/workspace/projects/all`,
                    children: null,
                  },
                ],
              }, 'projects/all')"
            >
              <Icon
                name="solar:folder-with-files-outline"
                class="size-4"
              />
              All Projects
            </button>
            <button
              v-for="project in projects"
              :key="project.id"
              class="flex w-full items-center gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
              @click="onNavigateToPage({
                name: 'Projects',
                path: `/workspace/projects/all`,
                children: [
                  {
                    name: `${project.title}`,
                    path: `/workspace/projects/${project.id}`,
                    children: null,
                  },
                ],
              }, `projects/${project.id}`)"
            >
              <Icon
                name="solar:folder-with-files-outline"
                class="size-4"
              />
              <span class="truncate text-start w-55">
                {{ project.title }}
              </span>
            </button>
          </div>
        </div>
        <div class="grid">
          <h3 class="p-2 text-xs text-muted-foreground">
            Settings
          </h3>
          <div>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
              @click="onNavigateToPage({
                name: 'Settings',
                path: `/workspace/settings/general`,
                children: [
                  {
                    name: 'General',
                    path: `/workspace/settings/general`,
                    children: null,
                  },
                ],
              }, 'settings/general')"
            >
              <Icon
                name="solar:settings-outline"
                class="size-4"
              />
              General
            </button>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434] cursor-pointer"
              @click="onNavigateToPage({
                name: 'Settings',
                path: `/workspace/settings/security`,
                children: [
                  {
                    name: 'Security',
                    path: `/workspace/settings/security`,
                    children: null,
                  },
                ],
              }, 'settings/security')"
            >
              <Icon
                name="solar:lock-password-outline"
                class="size-4"
              />
              Security
            </button>
            <ToggleTheme side="bottom" />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
