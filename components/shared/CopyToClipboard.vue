<script setup lang="ts">
import { CheckIcon, CopyIcon } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { cn } from '~/lib/utils'

const props = defineProps<{
  text: string
}>()

const isCopied = ref(false)
const text = ref(props?.text)

const copyToClipboard = async () => {
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)

  await navigator.clipboard.writeText(props?.text)
  toast.success('Copied to clipboard', {
    icon: CopyIcon,
  })
}
</script>

<template>
  <button
    class="flex items-center gap-2 py-3 text-base font-light text-primary hover:text-muted-foreground dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer dark:hover:text-white/90"
    :disabled="isCopied"
    @click="copyToClipboard"
  >
    <CheckIcon
      v-if="isCopied"
      :class="cn(isCopied ? 'opacity-100' : 'opacity-0', '')"
    />
    <CopyIcon
      v-else
      class="size-5"
    />
    {{ isCopied ? 'Copied to clipboard' : text }}
  </button>
</template>
