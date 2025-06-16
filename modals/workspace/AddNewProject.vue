<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Label } from '~/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import DateRangePicker from '~/components/workspace/DateRangePicker.vue'
import { columns, priorityOptions } from '~/types'

const modalStore = useModalStore()
const isModalOpen = computed(() => {
  return modalStore?.type === 'addNewProject' && modalStore?.isOpen
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
        <SheetTitle class="flex items-center gap-x-2 text-xl capitalize text-brand dark:text-primary">
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
      <div class="p-2 -mt-8 space-y-2">
        <div>
          <Textarea
            placeholder="Project title"
            class="outline-none border-0 shadow-none focus-visible:ring-0 resize-none placeholder:text-xl !text-xl dark:bg-transparent"
            @input="(e: Event) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = target.scrollHeight + 'px';
            }"
          />
        </div>

        <div class="px-2 grid gap-3">
          <div class="grid grid-cols-2">
            <Label>
              Status
            </Label>
            <Select :default-value="columns[0]?.name.toUpperCase()">
              <SelectTrigger
                class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80 w-full"
              >
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent
                class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2"
              >
                <SelectItem
                  v-for="column in columns"
                  :key="column.name"
                  :value="column.name.toUpperCase()"
                >
                  <Icon
                    :name="column.icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">
                    {{ column.name }}
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="grid grid-cols-2">
            <Label>
              Due date
            </Label>
            <DateRangePicker />
          </div>
          <div class="grid grid-cols-2">
            <Label>
              Priority
            </Label>
            <Select :default-value="priorityOptions[0]?.value">
              <SelectTrigger
                class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80 w-full"
              >
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent
                class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2"
              >
                <SelectItem
                  v-for="priority in priorityOptions"
                  :key="priority.name"
                  :value="priority.value"
                >
                  <div
                    class="size-2 rounded-full"
                    :style="{
                      backgroundColor: priority.color,
                    }"
                  />
                  <span class="truncate">
                    {{ priority.name }}
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="grid gap-2">
            <Label>Description</Label>
            <Textarea
              class="h-24 min-h-24 max-h-24 resize-none overflow-y-auto"
            />
          </div>
        </div>

        <div class="absolute bottom-0 p-1 left-0 right-0 backdrop-blur-xs">
          <Button class="w-full capitalize cursor-pointer bg-brand hover:bg-brand-secondary text-white">
            Add new project
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
