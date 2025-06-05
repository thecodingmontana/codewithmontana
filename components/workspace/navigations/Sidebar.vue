<script setup lang="ts">
import User from './User.vue'
import ToggleTheme from './ToggleTheme.vue'
import { ScrollArea } from '~/components/ui/scroll-area'

const modalStore = useModalStore()
const workspaceStore = useWorkspaceStore()

const isOpenSidebar = computed(() => {
  return workspaceStore?.isOpenSidebar
})

const onOpenNotificationModal = () => {
  modalStore?.setIsOpen(true)
  modalStore?.onOpen('notificationCenter')
}
</script>

<template>
  <div
    class="sticky top-0 z-20 h-screen shrink-0 overflow-hidden bg-[#fafafa] transition-all duration-300 dark:bg-[#1d1d1d] md:block"
    :class="{ 'w-0': !isOpenSidebar, 'hidden p-1 md:w-72': isOpenSidebar }"
  >
    <div
      class="relative flex h-full flex-col"
      :class="{ 'opacity-0': !isOpenSidebar, 'opacity-100': isOpenSidebar }"
    >
      <div class="w-full bg-background dark:bg-[#1d1d1d]">
        <User />
      </div>
      <ScrollArea class="flex-1 py-3 space-y-3">
        <div
          class="flex flex-col"
        >
          <button
            class="flex w-full items-center gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
          >
            <Icon
              name="solar:home-angle-2-outline"
              class="size-4"
            />
            Dashboard
          </button>
          <button
            class="flex w-full items-center gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
          >
            <Icon
              name="solar:chat-line-outline"
              class="size-4"
            />
            Chat
          </button>
          <button
            class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
            @click="onOpenNotificationModal"
          >
            <Icon
              name="solar:bell-outline"
              class="size-4"
            />
            Notifications
          </button>
        </div>
        <div class="grid">
          <h3 class="p-2 text-xs text-muted-foreground">
            Settings
          </h3>
          <div>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
            >
              <Icon
                name="solar:settings-outline"
                class="size-4"
              />
              General
            </button>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
            >
              <Icon
                name="solar:users-group-two-rounded-outline"
                class="size-4"
              />
              Users
            </button>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
            >
              <Icon
                name="solar:lock-password-outline"
                class="size-4"
              />
              Security
            </button>
            <button
              class="flex w-full items-center   gap-2 rounded-md p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#343434]"
            >
              <Icon
                name="solar:user-rounded-outline"
                class="size-4"
              />
              Profile
            </button>
            <ToggleTheme side="bottom" />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
