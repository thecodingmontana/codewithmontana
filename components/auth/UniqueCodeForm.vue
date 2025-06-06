<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { cn } from '~/lib/utils'
import { sendUniqueCodeSchema } from '~/types'

const props = defineProps<{
  onResetForm: (params: { mail: string, codeSent: boolean }) => void
}>()

const sendUniqueCodeForm = useForm({
  validationSchema: sendUniqueCodeSchema,
})

const onSendUniqueCode = sendUniqueCodeForm.handleSubmit((values) => {
  try {
    props?.onResetForm({
      mail: values.email,
      codeSent: true,
    })
  }
  catch (error) {
    if (error instanceof Error) {
      toast.error(error.message, {
        position: 'top-center',
      })
    }
  }
})
</script>

<template>
  <form
    class="mt-5 space-y-4"
    @submit.prevent="onSendUniqueCode"
  >
    <FormField
      v-slot="{ componentField }"
      name="email"
    >
      <FormItem class="space-y-1">
        <FormLabel class="text-sm font-medium">
          Email
        </FormLabel>
        <FormControl>
          <div
            :class="cn(
              'border rounded-md',
              sendUniqueCodeForm.errors.value.email && 'border-red-300',
            )"
          >
            <input
              type="text"
              placeholder="name@example.com"
              v-bind="componentField"
              class="block h-[46px] w-full rounded-md border-0 bg-transparent px-3 py-2 text-sm focus:bg-none focus:outline-none active:bg-transparent"
            >
          </div>
        </FormControl>
        <div class="flex items-center gap-1 px-0.5 text-xs text-red-600">
          <Icon
            v-if="sendUniqueCodeForm.errors.value.email"
            name="lucide-circle-alert"
          />
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    <button
      type="submit"
      :disabled="Boolean(!sendUniqueCodeForm.controlledValues.value.email || sendUniqueCodeForm.errors.value.email)"
      :class="cn(
        'flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded px-5 py-2 text-sm font-medium text-white transition-all',
        {
          'cursor-pointer bg-brand focus:bg-brand-secondary': sendUniqueCodeForm.controlledValues.value.email && !sendUniqueCodeForm.errors.value.email,
          'cursor-not-allowed bg-[#9e8cce]': !sendUniqueCodeForm.controlledValues.value.email || sendUniqueCodeForm.errors.value.email,
        },
      )"
    >
      Continue
    </button>
  </form>
</template>
