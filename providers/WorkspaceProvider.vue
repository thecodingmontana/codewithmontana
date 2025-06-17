<script setup lang="ts">
import Signout from '~/modals/global/Signout.vue'
import AddNewProject from '~/modals/workspace/AddNewProject.vue'
import AddNewTask from '~/modals/workspace/AddNewTask.vue'
import MobileSidebar from '~/modals/workspace/MobileSidebar.vue'
</script>

<template>
  <div>
    <Signout />
    <MobileSidebar />
    <AddNewProject />
    <AddNewTask />
  </div>
</template>
