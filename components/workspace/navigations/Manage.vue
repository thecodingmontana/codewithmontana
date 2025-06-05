<script setup lang="ts">
import { PlusIcon } from 'lucide-vue-next'
import type { AsyncDataRequestStatus } from '#app'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import type { WorkspaceBreadcrumb } from '~/types'

const props = defineProps<{
  status: AsyncDataRequestStatus
}>()

const workspaceStore = useWorkspaceStore()
const modalStore = useModalStore()

const currentActiveWorkspace = computed(() => {
  return workspaceStore.activeWorkspace
})

const onNavigateToPage = (payload: WorkspaceBreadcrumb, pageName: string) => {
  workspaceStore?.onSetWorkspaceBreadcrumb(payload)
  onClose()
  return navigateTo(`/workspace/${currentActiveWorkspace.value?.id}/${pageName}`)
}
const onClose = () => {
  modalStore?.setIsOpen(false)
  modalStore?.onClose()
}
</script>

<template>
  <div class="grid gap-2 p-2">
    <h3 class="text-xs text-muted-foreground">
      Manage
    </h3>
    <div
      v-if="props?.status ==='idle' || props?.status ==='pending'"
      class="mb-2 grid gap-2"
    >
      <div
        v-for="(item, index) in Array.from({ length: 3 })"
        :key="index"
        class="h-7 w-full animate-pulse rounded-md bg-slate-200 p-2"
      />
    </div>
    <div
      v-else
      class="grid gap-2"
    >
      <Accordion
        type="single"
        collapsible
        class="-mt-3"
      >
        <AccordionItem
          value="item-1"
          class="border-0"
        >
          <AccordionTrigger class="hover:no-underline">
            <div class="flex items-center gap-2 font-normal">
              <Icon
                name="solar:garage-outline"
                class="size-4"
              />
              Restaurants
            </div>
          </AccordionTrigger>
          <AccordionContent class="p-0">
            <button
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Dashboard',
                path: `/workspace/${currentActiveWorkspace?.id}/dashboard`,
                children: [
                  {
                    name: 'My Restaurants',
                    path: `/workspace/${currentActiveWorkspace?.id}/restaurants`,
                    children: null,
                  },
                ],
              }, 'restaurants')"
            >
              <Icon
                name="solar:garage-outline"
                class=" size-4 shrink-0 text-zinc-500 transition"
              />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                My Restaurants
              </p>
            </button>
            <button
              v-if="currentActiveWorkspace?.userRole ==='OWNER' || currentActiveWorkspace?.userRole ==='MANAGER'"
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Restaurants',
                path: `/workspace/${currentActiveWorkspace?.id}/restaurants`,
                children: [
                  {
                    name: 'Create',
                    path: `/workspace/${currentActiveWorkspace?.id}/restaurants/create`,
                    children: null,
                  },
                ],
              }, 'restaurants/create')"
            >
              <PlusIcon class=" size-4 shrink-0 text-zinc-500 transition" />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                Add Restaurant
              </p>
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        class="-mt-6"
      >
        <AccordionItem
          value="item-1"
          class="border-0"
        >
          <AccordionTrigger class="hover:no-underline">
            <div class="flex items-center gap-2 font-normal">
              <Icon
                name="solar:bill-list-linear"
                class="size-4"
              />
              Menu
            </div>
          </AccordionTrigger>
          <AccordionContent class="p-0">
            <button
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Dashboard',
                path: `/workspace/${currentActiveWorkspace?.id}/dashboard`,
                children: [
                  {
                    name: 'Menus',
                    path: `/workspace/${currentActiveWorkspace?.id}/menus`,
                    children: null,
                  },
                ],
              }, 'menus')"
            >
              <Icon
                name="solar:bill-list-linear"
                class=" size-4 shrink-0 text-zinc-500 transition"
              />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                All Menus
              </p>
            </button>
            <button
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Menu',
                path: `/workspace/${currentActiveWorkspace?.id}/menus`,
                children: [
                  {
                    name: 'Create',
                    path: `/workspace/${currentActiveWorkspace?.id}/menus/create`,
                    children: null,
                  },
                ],
              }, 'menus/create')"
            >
              <PlusIcon class=" size-4 shrink-0 text-zinc-500 transition" />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                Add Menu
              </p>
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion
        type="single"
        collapsible
        class="-mt-6"
      >
        <AccordionItem
          value="item-1"
          class="border-0"
        >
          <AccordionTrigger class="hover:no-underline">
            <div class="flex items-center gap-2 font-normal">
              <Icon
                name="solar:notification-unread-lines-outline"
                class="size-4"
              />
              Combos
            </div>
          </AccordionTrigger>
          <AccordionContent class="p-0">
            <button
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Dashboard',
                path: `/workspace/${currentActiveWorkspace?.id}/dashboard`,
                children: [
                  {
                    name: 'Combos',
                    path: `/workspace/${currentActiveWorkspace?.id}/combos`,
                    children: null,
                  },
                ],
              }, 'combos')"
            >
              <Icon
                name="solar:notification-unread-lines-outline"
                class=" size-4 shrink-0 text-zinc-500 transition"
              />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                All Combos
              </p>
            </button>
            <button
              class="group mb-1 flex w-full items-center gap-x-2 rounded-md px-2 py-1 font-semibold transition  hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
              @click="onNavigateToPage({
                name: 'Combos',
                path: `/workspace/${currentActiveWorkspace?.id}/combos`,
                children: [
                  {
                    name: 'Create',
                    path: `/workspace/${currentActiveWorkspace?.id}/combos/create`,
                    children: null,
                  },
                ],
              }, 'combos/create')"
            >
              <PlusIcon class=" size-4 shrink-0 text-zinc-500 transition" />
              <p class="dark:hover:text-peer-primary  line-clamp-1 text-sm font-semibold text-zinc-500 transition dark:text-zinc-200">
                Add Combos
              </p>
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
