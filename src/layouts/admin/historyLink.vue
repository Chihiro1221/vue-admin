<script setup lang="ts">
import menuService from '@/composables/menu'
menuService.init()
</script>

<template>
  <div
    class="hidden md:grid grid-flow-col gap-2 justify-start px-3 p-3 bg-gray-50 border-t border-b shadow-sm"
    v-show="menuService.history.value.length"
  >
    <div
      v-for="(menu, index) of menuService.history.value"
      :key="index"
      class="bg-white py-2 px-3 text-sm rounded-md shadow-sm hover:shadow-md hover:bg-violet-500 hover:text-white duration-300 border"
      :class="{ 'bg-violet-500 text-white': $route.name === menu.route }"
      @click="menuService.close.value = false"
    >
      <router-link :to="{ name: menu.route }">{{ menu.title }}</router-link>
      <i
        @click="menuService.removeHistoryMenu(menu)"
        class="fas fa-times ml-2 cursor-pointer hover:bg-red-500 rounded-full w-[15px] h-[15px] text-center"
      ></i>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
