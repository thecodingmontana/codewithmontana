<script setup lang="ts"></script>

<template>
  <section class="relative">
    <div
      class="animate-fadeInUp relative z-20 mx-auto mt-32 mb-2 flex max-w-full flex-col items-center justify-center px-3 delay-200 md:mt-36 md:max-w-4xl lg:max-w-5xl"
    >
      <h1
        class="animate-fadeInUp my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance text-white opacity-90 delay-400 md:text-5xl lg:text-6xl dark:text-zinc-100"
      >
        <span class="md:text-nowrap">Passionate creating great</span>
        <br class="hidden md:block">
        experiences on
        <span
          class="font-nyght bg-linear-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide"
        >
          web & mobile
        </span>
        .
      </h1>
      <p
        class="text-white animate-fadeInUp relative z-10 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl delay-600 sm:flex-row md:text-xl lg:mt-7 lg:text-2xl"
      >
        <span
          class="grad-white flex items-center justify-center fontsninja-font"
          data-ninja-font="outfit_thin_normal_t3v0z"
        >
          Hello, I'm Christopher Odhiambo, Software Engineer. <br>
          I focus on crafting beautiful experiences on both web and mobile <br>
          that are easy to use, enjoyable, and get the job done.
        </span>
      </p>
      <div>
        <NuxtLink
          to="#"
          as-child
        >
          <Button class="bg-white text-black hover:bg-zinc-300">
            Let's Connect
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div
      class="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_80%)] before:opacity-60"
    >
      <div
        class="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"
      />
    </div>
  </section>
</template>
