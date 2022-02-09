<script setup lang="ts">
import menuService from '@/composables/menu'
const route = menuService.currentRoute.value
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item :to="{ path: r.path }" v-for="(r, i) of route.matched" :key="i">
        {{ r.meta.menu?.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
