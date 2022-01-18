<script setup lang="ts">
import { IMenu } from '#/menu'
import router from '@/router'
import { menuStore } from '@/store/menuStore'

const menu = menuStore()
const reset = () => {
  menu.menus.forEach(menu => {
    menu.isActive = false
    menu.children?.forEach(cmenu => {
      cmenu.isActive = false
    })
  })
}

const changeMenu = (menu: IMenu, cmenu?: IMenu) => {
  reset()
  menu.isActive = true
  if (cmenu) {
    cmenu.isActive = true
    router.push({
      name: cmenu!.route,
    })
  }
}
</script>

<template>
  <div class="menu hidden md:block">
    <div class="logo">
      <i class="fab fa-angular text-[50px] mr-2"></i>
      <span class="text-lg">公司名称</span>
    </div>
    <div class="menu-container">
      <dl v-for="(menu, index) of menu.menus" :key="index">
        <dt @click="changeMenu(menu)">
          <div>
            <i :class="menu.icon" class="mr-2 text-2xl"></i>
            <span>{{ menu.title }}</span>
          </div>
          <i class="fas fa-angle-down rotate-90 duration-300" :class="{ 'rotate-0': menu.isActive }"></i>
        </dt>
        <dd
          @click="changeMenu(menu, cmenu)"
          v-show="menu.isActive"
          :class="{ active: cmenu.isActive }"
          v-for="(cmenu, key) of menu.children"
          :key="key"
        >
          {{ cmenu?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  @apply w-[200px] bg-gray-800 p-4;
  .logo {
    @apply text-white flex items-center justify-center;
  }
  .menu-container {
    @apply mt-5;
    dl {
      @apply text-white mt-5;
      dt {
        @apply flex items-center justify-between cursor-pointer;
        div {
          @apply flex items-center;
        }
      }
      dd {
        @apply mt-3 py-2 pl-2  rounded-md  duration-300 cursor-pointer bg-gray-600 hover:bg-violet-500;
        &.active {
          @apply bg-violet-700;
        }
      }
    }
  }
}
</style>
