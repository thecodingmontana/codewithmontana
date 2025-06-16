<script setup lang="ts">
import { Button } from '~/components/ui/button'

interface DonutItem {
  color: string
  name: string
  value: number
}

const DonutData: DonutItem[] = [
  {
    color: '#3b82f6',
    name: 'Blue',
    value: 50,
  },
  {
    color: '#22c55e',
    name: 'Green',
    value: 30,
  },
]
</script>

<template>
  <div class="md:col-span-2 p-3">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">
          Project Stats
        </h2>
        <Button
          class="rounded-full cursor-pointer"
          variant="ghost"
          size="icon"
        >
          <Icon name="solar:refresh-outline" />
        </Button>
      </div>
      <DonutChart
        :data="DonutData.map((i: DonutItem) => i.value)"
        :height="275"
        :labels="DonutData"
        :hide-legend="true"
        :radius="0"
        type="half"
      >
        <div class="absolute text-center">
          <div class="text-(--ui-text-muted)">
            2 seconds ago
          </div>
        </div>
      </DonutChart>
      <div class="grid grid-cols-2">
        <div class="flex flex-col items-center">
          <div class="flex items-center flex-shrink-0 gap-x-2">
            <div
              class="bg-green-500 size-1.5 rounded-full"
            />
            <p class="text-muted-foreground text-sm">
              Completed
            </p>
          </div>
          <p class="text-2xl font-medium">
            20
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center flex-shrink-0 gap-x-2">
            <div
              class="bg-blue-500 size-1.5 rounded-full"
            />
            <p class="text-muted-foreground text-sm">
              In Progress
            </p>
          </div>
          <p class="text-2xl font-medium">
            80
          </p>
        </div>
      </div>
      <p class="text-center text-muted-foreground text-sm">
        You completed <strong class="text-emerald-500">3% more</strong> of projects this week than last week
      </p>
    </div>
  </div>
</template>
