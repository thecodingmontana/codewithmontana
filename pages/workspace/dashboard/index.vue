<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
  layout: 'workspace',
})

useHead({
  titleTemplate: '%s - Dashboard',
})

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: 'Dashboard',
  description: 'Explore Christopher\'s journey through web engineering, projects, and personal insights.',
})

const workspaceStore = useWorkspaceStore()

onMounted(() => {
  workspaceStore?.onSetWorkspaceBreadcrumb({
    name: 'Dashboard',
    path: `/workspace/dashboard`,
    children: null,
  })
})
</script>

<template>
  <section>
    <div>
      <div class="flex items-center gap-x-3">
        <div class="p-2 rounded-md bg-muted w-fit h-fit flex items-center justify-center">
          <Icon
            name="hugeicons:dashboard-square-02"
            class="size-12"
            size="25"
          />
        </div>
        <div>
          <h2 class="text-lg font-semibold">
            Dashboard
          </h2>
          <p class="text-xs sm:text-sm text-muted-foreground -mt-1">
            Monitor all your projects, tasks, and activities in one place.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
