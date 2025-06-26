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
</script>

<template>
  <main>
    <NuxtLoadingIndicator />
    <div
      class="flex overflow-hidden"
    >
      <Sidebar />
      <div class="grid size-full gap-1 px-5 py-3">
        <WorkspaceHeader />
        <div class="sm:p-3">
          <slot />
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
