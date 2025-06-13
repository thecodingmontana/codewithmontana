<script setup lang="ts">
import { Button } from '~/components/ui/button'
import type { IProjectColumn } from '~/types'

const props = defineProps<{
  column: IProjectColumn
}>()
</script>

<template>
  <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0 self-start grid gap-5">
    <div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-2">
          <Icon :name="props.column.icon" />
          <p>
            {{ props.column.name }}
          </p>
        </div>
        <Icon name="uis:ellipsis-v" />
      </div>
      <p class="text-xs italic text-muted-foreground">
        {{ props.column.description }}
      </p>
    </div>
    <Button
      class="w-full gap-2 cursor-pointer dark:hover:bg-[#343434]"
      size="sm"
      variant="outline"
    >
      <Icon
        name="hugeicons:plus-sign"
        class="size-4"
      />
      Add Project
    </Button>
  </div>
</template>
