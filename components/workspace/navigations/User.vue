<script setup lang="ts">
import {
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-vue-next'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

const { user } = useUserSession()

withDefaults(defineProps<{
  side?: 'right' | 'top' | 'bottom' | 'left'
}>(), {
  side: 'right',
})

const modalStore = useModalStore()

const onOpenSignoutModal = () => {
  modalStore?.setIsOpen(true)
  modalStore?.onOpen('signout')
}

const onOpenNotificationModal = () => {
  modalStore?.setIsOpen(true)
  modalStore?.onOpen('notificationCenter')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="w-full px-1 py-3 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground dark:bg-[#1d1d1d]"
      >
        <Avatar class="size-8 rounded-lg">
          <AvatarImage
            :src="user?.avatar ?? ''"
            :alt="user?.username"
          />
          <AvatarFallback class="rounded-lg">
            CN
          </AvatarFallback>
        </Avatar>

        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ user?.username }}</span>
          <span class="truncate text-xs">{{ user?.email }}</span>
        </div>
        <ChevronsUpDown class="ml-auto size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg dark:bg-[#1d1d1d]"
      :side="side"
      :align="side ==='top' ? 'start' : 'end'"
      :side-offset="side ==='top' ? 0: 4"
    >
      <DropdownMenuLabel class="p-0 font-normal ">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="size-8 rounded-lg">
            <AvatarImage
              :src="user?.avatar ?? ''"
              :alt="user?.username"
            />
            <AvatarFallback class="rounded-lg">
              CN
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user?.username }}</span>
            <span class="truncate text-xs">{{ user?.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem class="cursor-pointer dark:hover:bg-[#343434]">
          <Sparkles />
          Upgrade to Pro
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem class="cursor-pointer dark:hover:bg-[#343434]">
          <Icon
            name="solar:user-rounded-outline"
            class="size-4"
          />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem class="cursor-pointer dark:hover:bg-[#343434]">
          <CreditCard />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem
          class="cursor-pointer dark:hover:bg-[#343434]"
          @click="onOpenNotificationModal"
        >
          <Bell />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        class="cursor-pointer dark:hover:bg-[#343434]"
        @click="onOpenSignoutModal"
      >
        <LogOut />
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
