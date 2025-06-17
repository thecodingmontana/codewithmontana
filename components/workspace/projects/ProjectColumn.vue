<script setup lang="ts">
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import type { DBProject, IProjectColumn } from '~/types'

const props = defineProps<{
  column: IProjectColumn
  data: DBProject[]
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
    <div
      v-for="project in props.data"
      :key="project.id"
      class="bg-background p-2.5 rounded-sm shadow space-y-2"
    >
      <div>
        <Badge
          :class="cn(
            'rounded text-xs gap-x-1 flex',
            project.priority === 'MEDIUM' && 'bg-amber-100 dark:bg-amber-100 text-amber-500',
            project.priority === 'LOW' && 'bg-purple-100 dark:bg-purple-100 text-purple-500',
            project.priority === 'HIGH' && 'bg-rose-100 dark:bg-rose-100 text-rose-500',
            project.priority === 'NONE' && 'bg-zinc-100 dark:bg-zinc-100 text-zinc-500',
          )"
        >
          <div
            :class="cn(
              'rounded-full size-1.5 shrink-0',
              project.priority === 'MEDIUM' && 'bg-amber-500',
              project.priority === 'LOW' && 'bg-purple-500',
              project.priority === 'HIGH' && 'bg-rose-500',
              project.priority === 'NONE' && 'bg-zinc-500',
            )"
          />
          {{ project.priority }}
        </Badge>
      </div>
      <div>
        <h3>
          {{ project.title }}
        </h3>
        <p
          v-if="project.description"
          class="text-sm text-muted-foreground"
        >
          {{ project.description }}
        </p>
      </div>
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
