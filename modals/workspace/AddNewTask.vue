<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import DateRangePicker from '~/components/workspace/DatePicker.vue'

const modalStore = useModalStore()
const isModalOpen = computed(() => {
  return modalStore?.type === 'addNewTask' && modalStore?.isOpen
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
        <SheetTitle class="flex items-center gap-x-2 text-xl capitalize">
          <div class="size-10 p-2 rounded-md bg-muted">
            <Icon
              name="hugeicons:task-02"
              size="25"
            />
          </div>
          Add new task
        </SheetTitle>
        <SheetDescription class="sr-only">
          Add new task
        </SheetDescription>
      </SheetHeader>
      <div class="p-2 -mt-8">
        <div>
          <Textarea
            placeholder="Task name"
            class="outline-none border-0 shadow-none focus-visible:ring-0 resize-none placeholder:text-xl dark:bg-transparent !text-xl"
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
            <Select default-value="s3">
              <SelectTrigger
                id="select-34"
                class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80 w-full"
              >
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent
                class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2"
              >
                <SelectItem value="s1">
                  <Icon
                    name="ri:reactjs-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">React</span>
                </SelectItem>
                <SelectItem value="s2">
                  <Icon
                    name="ri:nextjs-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">Next.js</span>
                </SelectItem>
                <SelectItem value="s3">
                  <Icon
                    name="ri:gatsby-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">Gatsby</span>
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
            <Select default-value="s3">
              <SelectTrigger
                id="select-34"
                class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80 w-full"
              >
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent
                class="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2"
              >
                <SelectItem value="s1">
                  <Icon
                    name="ri:reactjs-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">React</span>
                </SelectItem>
                <SelectItem value="s2">
                  <Icon
                    name="ri:nextjs-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">Next.js</span>
                </SelectItem>
                <SelectItem value="s3">
                  <Icon
                    name="ri:gatsby-line"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                  <span class="truncate">Gatsby</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="grid gap-1.5">
            <Label>Description</Label>
            <Textarea
              class="resize-none"
            />
          </div>

          <div class="grid gap-2">
            <Label>Subtasks</Label>
            <div class="flex items-center gap-x-1">
              <Checkbox class="rounded-full size-5" />
              <Input
                class="outline-none border-0 shadow-none focus-visible:ring-0"
                placeholder="Add subtask"
              />
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
