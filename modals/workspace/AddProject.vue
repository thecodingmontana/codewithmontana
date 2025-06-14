<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

const modalStore = useModalStore()
const isModalOpen = computed(() => {
  return modalStore?.type === 'addProject' && modalStore?.isOpen
})

const onClose = () => {
  modalStore?.setIsOpen(false)
  modalStore?.onClose()
}
</script>

<template>
  <Sheet
    :open="isModalOpen"
    @update:open="onClose"
  >
    <SheetContent class="dark:bg-[#1d1d1d]">
      <SheetHeader>
        <SheetTitle class="flex items-center gap-x-2 text-xl">
          <div class="size-10 p-2 rounded-md bg-muted">
            <Icon
              name="solar:folder-with-files-outline"
              size="25"
            />
          </div>
          Add new project
        </SheetTitle>
        <SheetDescription class="sr-only">
          Add new project
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
