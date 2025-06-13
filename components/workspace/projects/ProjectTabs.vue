<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs
    default-value="board"
    class="w-[400px]"
  >
    <TabsList class="rounded-md p-1">
      <TabsTrigger
        value="board"
        class="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer rounded"
      >
        <Icon
          name="solar:notification-unread-lines-outline"
          class="size-5"
        />
        Board
      </TabsTrigger>
      <TabsTrigger
        value="list"
        class="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer rounded"
      >
        <Icon
          name="hugeicons:left-to-right-list-dash"
          class="size-5"
        />
        List
      </TabsTrigger>
      <TabsTrigger
        value="table"
        class="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer rounded"
      >
        <Icon
          name="hugeicons:layout-table-02"
          class="size-5"
        />
        Table
      </TabsTrigger>
      <TabsTrigger
        value="calendar"
        class="data-[state=active]:bg-brand dark:data-[state=active]:bg-brand data-[state=active]:text-white data-[state=inactive]:text-muted-foreground cursor-pointer rounded"
      >
        <Icon
          name="hugeicons:calendar-02"
          class="size-5"
        />
        Calendar
      </TabsTrigger>
    </TabsList>
    <TabsContent value="board">
      Board project overview.
    </TabsContent>
    <TabsContent value="list">
      List project overview.
    </TabsContent>
    <TabsContent value="table">
      Table project overview.
    </TabsContent>
    <TabsContent value="calendar">
      Calendar project overview.
    </TabsContent>
  </Tabs>
</template>
