<script setup lang="ts">
import CopyToClipboard from '../shared/CopyToClipboard.vue'

const { $gsap } = useNuxtApp()

let timeline: gsap.core.Timeline | null = null

onMounted(async () => {
  await nextTick()

  timeline = $gsap.timeline({ paused: true })

  timeline
    .fromTo(
      '.animate-scaleIn',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: 'power4.out', delay: 0.3 },
    )
    .fromTo('.animate-title', { opacity: 0, y: 20 }, { opacity: 1, duration: 1.8, y: 0, ease: 'power2.out' }, '-=2')
    .fromTo(
      '.animate-typing',
      { opacity: 0, text: '' },
      { opacity: 1, text: 'web & mobile', duration: 1.5, ease: 'power2.out' },
      '-=1.8',
    )
    .fromTo('.animate-info', { opacity: 0, y: 20 }, { opacity: 1, duration: 1.5, y: 0, ease: 'power2.out' }, '-=1.5')
    .fromTo('.animate-buttons', { opacity: 0, y: 20 }, { opacity: 1, duration: 1.5, y: 0, ease: 'power2.out' }, '-=1')

  timeline.play()
})

onUnmounted(() => {
  timeline?.kill()
})
</script>

<template>
  <section class="relative">
    <div
      class="animate-fadeInUp relative z-20 mx-auto mt-36 mb-2 flex max-w-full flex-col items-center justify-center px-3 delay-200 md:mt-48 md:max-w-4xl lg:max-w-5xl"
    >
      <h1
        class="animate-title my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance text-white opacity-90 delay-400 md:text-5xl lg:text-6xl dark:text-zinc-100"
      >
        <span class="md:text-nowrap">Passionate creating great</span>
        <br class="hidden md:block">
        experiences on
        <span
          class="animate-typing font-nyght bg-linear-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide"
        />
        .
      </h1>
      <p
        class="animate-info text-white animate-fadeInUp relative z-10 mt-4 mb-7 max-w-xl flex flex-col items-center justify-center text-center delay-600 sm:flex-row md:text-xl lg:mt-7"
      >
        <span class="grad-white flex items-center justify-center">
          Hello, I'm Christopher Odhiambo, Software Engineer.
          I focus on crafting beautiful experiences on both web and mobile
          that are easy to use, enjoyable, and get the job done.
        </span>
      </p>
      <div
        class="animate-buttons z-100 mt-4 flex flex-col items-center justify-center gap-6 delay-800 md:mt-8 md:flex-row md:gap-10"
      >
        <NuxtLink
          to="https://cal.com/thecodingmontana"
          target="_blank"
          class="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1"
        >
          <span
            class="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black"
          >Book a call</span><span
            class="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
          /><span
            class="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" /></svg><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" /></svg></span>
        </NuxtLink>
        <CopyToClipboard text="hello@thecodingmontana.com" />
      </div>
    </div>
    <div
      class="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-28 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_80%)] before:opacity-60"
    >
      <div
        class="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e] animate-glow"
      />
    </div>
  </section>
</template>
