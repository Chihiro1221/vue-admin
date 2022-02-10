<script setup lang="ts">
import { userStore } from '@/store/userStore'
import utils from '@/utils'
import menuService from '@/composables/menu'
import Notification from '@/components/notification.vue'
import Breadcrumb from '@/components/breadcrumb.vue'
const user = userStore()
const fullScreen = () => {
  document.documentElement.requestFullscreen()
}
</script>

<template>
  <div class="navbar">
    <div class="flex items-center">
      <div class="mr-2 cursor-pointer" @click="menuService.toggleState()">
        <i class="fas fa-angle-double-left text-violet-700" v-if="!menuService.close.value"></i>
        <i class="fas fa-angle-double-right text-violet-700" v-else></i>
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>
    <div class="operator">
      <Notification class="mr-5" />
      <i @click="fullScreen" class="fas fa-arrows-alt mr-2 cursor-pointer text-gray-600"></i>
      <div class="relative group">
        <div class="flex items-center cursor-pointer">
          <img :src="user.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
          <span class="ml-1 text-sm">{{ user.info?.name }}</span>
        </div>
        <section class="group-hover:!block relative">
          <div class="item">
            <i class="fas fa-file-word"></i>
            <a href="#">文档中心</a>
          </div>
          <div class="item">
            <i class="fas fa-house-user"></i>
            <a href="#">网站首页</a>
          </div>
          <div class="item" @click="utils.user.logout()">
            <i class="fas fa-sign-out-alt"></i>
            <a href="#">退出登录</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  @apply bg-white py-2 px-3 flex justify-between items-center;
  .operator {
    @apply flex items-center;
    > div {
      > section {
        @apply absolute top-full bg-white p-3 right-0 rounded-md shadow-sm hidden z-50;
        > .item {
          @apply py-2 flex items-center border-b;
          i {
            @apply text-sm;
          }
          a {
            @apply ml-1 text-gray-700 text-xs whitespace-nowrap;
          }
        }
      }
    }
  }
}
</style>
