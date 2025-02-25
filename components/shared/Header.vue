<script setup lang="ts"></script>

<template>
  <header class="px-4 sm:px-6 lg:px-8 h-16 flex items-center">
    <div
      class="mx-auto w-full max-w-screen-lg flex items-center justify-end gap-4"
    >
      <NuxtLink
        to="/"
        class="items-center justify-center transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded flex"
      >
        <Icon
          name="hugeicons:home-03"
          class="size-5"
        />
      </NuxtLink>
      <NuxtLink
        to="/creations"
        class="items-center justify-center transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded flex"
      >
        <Icon
          name="hugeicons:labs"
          class="size-5"
        />
      </NuxtLink>
      <hr
        class="h-6 w-px border-l border-neutral-200 dark:border-neutral-800"
      >
      <NuxtLink
        to="https://github.com/thecodingmontana"
        target="_blank"
        class="items-center justify-center transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded flex"
      >
        <Icon
          name="i-simple-icons-github"
          class="size-5"
        />
      </NuxtLink>
      <NuxtLink
        to="https://x.com/codewithmontana"
        target="_blank"
        class="items-center justify-center transition-colors duration-300 ease-out dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-500 focus-visible:rounded flex"
      >
        <Icon
          name="i-simple-icons-x"
          class="size-5"
        />
      </NuxtLink>
      <hr
        class="h-6 w-px border-l border-neutral-200 dark:border-neutral-800"
      >
      <SharedThemeToggle />
    </div>
  </header>
</template>
