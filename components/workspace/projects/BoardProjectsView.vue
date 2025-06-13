<script setup lang="ts">
</script>

<template>
  <div class="flex overflow-x-scroll gap-5 my-2 scrollbar-hide">
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="hugeicons:ai-idea" />
            <p>Idea</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Raw thoughts or concepts not yet acted upon.
        </p>
      </div>
    </div>
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="solar:clipboard-outline" />
            <p>Todo</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Planned projects that are queued and ready to start.
        </p>
      </div>
    </div>
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="solar:alarm-outline" />
            <p>In Progress</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Projects currently being worked on.
        </p>
      </div>
    </div>
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="solar:minimalistic-magnifer-bug-outline" />
            <p>In Review</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Projects completed but pending evaluation or feedback.
        </p>
      </div>
    </div>
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="solar:check-circle-outline" />
            <p>Completed</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Projects fully done and verified.
        </p>
      </div>
    </div>
    <div class="bg-muted rounded-md p-3 w-[350px] flex-shrink-0">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2">
            <Icon name="solar:trash-bin-trash-outline" />
            <p>Abandoned</p>
          </div>
          <Icon name="uis:ellipsis-v" />
        </div>
        <p class="text-xs italic text-muted-foreground">
          Projects intentionally discontinued or no longer relevant.
        </p>
      </div>
    </div>
  </div>
</template>
