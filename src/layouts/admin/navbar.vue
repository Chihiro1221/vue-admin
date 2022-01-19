<script setup lang="ts">
import { userStore } from '@/store/userStore'
import utils from '@/utils'
import menuService from '@/composables/menu'

const user = userStore()
</script>

<template>
  <div class="bg-white py-2 px-3 flex justify-between items-center">
    <div class="flex items-center">
      <div class="mr-2 cursor-pointer" @click="menuService.toggleState()">
        <i class="fas fa-angle-double-left text-violet-700" v-if="!menuService.close.value"></i>
        <i class="fas fa-angle-double-right text-violet-700" v-else></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="cursor-pointer relative group">
      <div class="flex items-center">
        <img :src="user.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
        <span class="ml-1 text-sm">{{ user.info?.name }}</span>
      </div>
      <section class="group-hover:block absolute top-full bg-white p-3 right-0 rounded-md shadow-sm hidden">
        <div class="py-2 flex items-center border-b">
          <i class="fas fa-file-word text-lg"></i>
          <a class="ml-1 text-gray-700 text-xs whitespace-nowrap">文档中心</a>
        </div>
        <div class="py-2 flex items-center">
          <i class="fas fa-home text-lg"></i>
          <a class="ml-1 text-gray-700 text-xs whitespace-nowrap">网站首页</a>
        </div>
        <div class="py-2 flex items-center" @click="utils.user.logout()">
          <i class="fas fa-sign-out-alt text-lg"></i>
          <a class="ml-1 text-gray-700 text-xs whitespace-nowrap">退出登录</a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
