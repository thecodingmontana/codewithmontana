import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin,
    },
  }
})
