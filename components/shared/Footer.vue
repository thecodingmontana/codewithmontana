<script setup lang="ts"></script>

<template>
  <div
    class="mx-auto max-w-screen-md my-8 lg:my-12 flex flex-col items-center gap-6 text-sm"
  >
    <div class="flex items-center justify-center gap-2 md:justify-end">
      <span class="font-sofia text-neutral-500 dark:text-neutral-500">Follow me on</span>
      <div class="flex items-center justify-center gap-2">
        <NuxtLink
          to="https://x.com/codewithmontana"
          target="_blank"
          class="flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded"
          title="My X (Twitter)"
        >
          <Icon
            name="i-simple-icons-x"
            class="inline-block size-4 dark:size-4"
          />
        </NuxtLink>
        <NuxtLink
          to="https://github.com/thecodingmontana"
          target="_blank"
          class="flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded"
          title="My GitHub"
        >
          <Icon
            name="i-simple-icons-github"
            class="inline-block size-4 dark:size-4"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
