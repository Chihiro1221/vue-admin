<script setup lang="ts">
import menuComponent from './admin/menu.vue'
import Navbar from '@/layouts/admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import { menuStore } from '@/store/menuStore'
import { onBeforeRouteUpdate } from 'vue-router'
const menu = menuStore()
menu.init()
onBeforeRouteUpdate(route => {
  menuStore().addHistoryMenu(route)
})
</script>

<template>
  <div class="admin">
    <menuComponent />
    <div class="flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="p-5">
        <router-view #default="{ Component }">
          <transition appear enter-active-class="animate__animated">
            <component :is="Component" />
          </transition>
        </router-view>
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
