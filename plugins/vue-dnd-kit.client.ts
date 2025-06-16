import VueDnDKitPlugin from '@vue-dnd-kit/core'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDnDKitPlugin)
})
