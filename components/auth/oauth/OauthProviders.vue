<script setup lang="ts">
type IAuthProvider = 'google' | 'facebook'

const onSigninWith = (provider: IAuthProvider) => {
  window.location.href = `/api/auth/signin/${provider}`
}
</script>

<template>
  <div class="mt-7 grid gap-4 overflow-hidden">
    <div class="flex h-[42px] items-center !overflow-hidden">
      <button
        class="flex h-[42px] w-full items-center justify-center gap-2 rounded border px-2 text-sm font-medium duration-300 hover:border-purple-200"
        @click="onSigninWith('google')"
      >
        <Icon
          name="devicon:google"
          class="size-4"
        />
        Continue with Google
      </button>
    </div>
    <!-- <button
      class="flex h-[42px] w-full items-center justify-center gap-2 rounded border px-2 text-sm font-medium duration-300 hover:border-purple-200"
      @click="onSigninWith('facebook')"
    >
      <Icon
        name="logos:facebook"
        class="size-4"
      />
      Continue with Github
    </button> -->
  </div>
</template>
