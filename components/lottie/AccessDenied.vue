<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn(props?.class)">
    <client-only>
      <Vue3Lottie
        animation-link="/lottie/access-denied.json"
        :height="250"
        :width="300"
      />
    </client-only>
  </div>
</template>
