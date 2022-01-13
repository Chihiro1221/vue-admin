<script setup lang="ts">
import menuComponent from './admin/menu.vue'
import Navbar from '@/layouts/admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import { menuStore } from '@/store/menuStore'
const menu = menuStore()
menu.init()
</script>

<template>
  <div class="admin">
    <menuComponent />
    <div class="flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="p-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  @apply w-screen min-h-screen flex;
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
