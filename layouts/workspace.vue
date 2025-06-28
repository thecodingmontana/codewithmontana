<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import Sidebar from '~/components/workspace/navigations/Sidebar.vue'
import WorkspaceHeader from '~/components/workspace/navigations/WorkspaceHeader.vue'
import WorkspaceProvider from '~/providers/WorkspaceProvider.vue'

useHead({
  meta: [
    { property: 'og:title', content: `Christopher Odhiambo` },
    {
      name: 'description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    {
      property: 'og:description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    { property: 'og:url', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
    { name: 'twitter:title', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
    {
      name: 'twitter:description',
      content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
    },
    { name: 'twitter:site', content: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.' },
  ],
  title: `Christopher Odhiambo`,
})

const workspaceStore = useWorkspaceStore()

const isOpenSidebar = computed(() => {
  return workspaceStore?.isOpenSidebar
})
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator />

    <div class="flex flex-1">
      <Sidebar />
      <div
        class="flex-1 relative flex flex-col size-full gap-1 px-5 transition-all duration-300"
        :class="{ 'pl-[0rem]': !isOpenSidebar, 'pl-[18rem]': isOpenSidebar }"
      >
        <WorkspaceHeader />

        <div class="overflow-y-auto flex-1">
          <div class="sm:p-3">
            <slot />
          </div>
        </div>
      </div>
    </div>

    <Toaster
      :rich-colors="true"
      :close-button="true"
    />
    <WorkspaceProvider />
  </main>
</template>
