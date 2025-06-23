<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const selectedValue = ref('on')

type RevenueDataItem = {
  day: string
  desktop: number
  mobile: number
}

const RevenueData: RevenueDataItem[] = [
  { day: 'Mon', desktop: 186, mobile: 80 },
  { day: 'Tue', desktop: 305, mobile: 200 },
  { day: 'Wed', desktop: 237, mobile: 120 },
  { day: 'Thur', desktop: 73, mobile: 190 },
  { day: 'Fri', desktop: 209, mobile: 130 },
  { day: 'Sat', desktop: 214, mobile: 140 },
  { day: 'Sun', desktop: 237, mobile: 120 },
]

const RevenueCategoriesMultple = {
  desktop: { name: 'Desktop', color: '#3b82f6' },
  mobile: { name: 'Mobile', color: '#22c55e' },
}

const xFormatter = (i: number): string => `${RevenueData[i]?.day}`
const yFormatter = (tick: number) => tick.toString()
</script>

<template>
  <div class="p-5 rounded-md border grid gap-5">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-medium">
        Weekly Tasks Productivity Overview
      </h2>
      <div class="inline-flex h-9 rounded-lg bg-input/50 p-0.5">
        <RadioGroup
          v-model="selectedValue"
          :data-state="selectedValue"
          class="group relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-md after:bg-background after:shadow-xs after:shadow-black/[.04] after:ring-offset-background after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-focus-visible:after:ring-2 has-focus-visible:after:ring-ring has-focus-visible:after:ring-offset-2 data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full"
        >
          <label
            class="relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center whitespace-nowrap px-4 group-data-[state=on]:text-muted-foreground/70"
          >
            Last week
            <RadioGroupItem
              value="off"
              class="sr-only"
            />
          </label>
          <label
            class="relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center whitespace-nowrap px-4 group-data-[state=off]:text-muted-foreground/70"
          >
            <span> This <span class="group-data-[state=on]:text-emerald-500">week</span> </span>
            <RadioGroupItem
              value="on"
              class="sr-only"
            />
          </label>
        </RadioGroup>
      </div>
    </div>
    <div>
      <BarChart
        :data="RevenueData"
        :height="300"
        :categories="RevenueCategoriesMultple"
        :y-axis="['desktop', 'mobile']"
        :group-padding="0"
        :bar-padding="0.2"
        :x-num-ticks="6"
        :radius="4"
        :x-formatter="xFormatter"
        :y-formatter="yFormatter"
        :legend-position="LegendPosition.Top"
        :hide-legend="false"
        :y-grid-line="true"
      />
    </div>
  </div>
</template>
