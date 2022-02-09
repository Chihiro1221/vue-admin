<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from '@/layouts/admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import menuService from '@/composables/menu'
import { watch } from 'vue'

const route = useRoute()
watch(
  route,
  (route: RouteLocationNormalizedLoaded) => {
    menuService.addHistoryMenu(route)
  },
  { immediate: true }
)
</script>

<template>
  <div class="admin">
    <MenuComponent />
    <div class="grid grid-rows-[auto_1fr] bg-gray-100">
      <div>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view #default="{ Component }">
          <Transition
            class="animate__animated"
            appear
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutLeft"
          >
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  @apply w-screen min-h-screen grid grid-cols-[auto_1fr];
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>

<style scoped lang="scss">
.animate__fadeInRight {
  animation-duration: 600ms;
}
.animate__fadeOutLeft {
  animation-duration: 600ms;
}
</style>
