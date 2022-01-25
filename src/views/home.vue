<script setup lang="ts"></script>

<template>
  <div class="home w-screen min-h-screen bg-gray-700 flex flex-col justify-start pt-[15%] items-center">
    <img src="/images/1.jpg" class="w-40 h-40 rounded-full border-4 border-white object-cover" />
    <div class="mt-5">
      <router-link :to="{ name: 'admin.home' }" class="text-3xl !px-4 !py-2 hd-button drop-shadow-md">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="text-3xl !px-4 !py-2 hd-button danger ml-3 drop-shadow-md">登录页面</router-link>
    </div>
    <div class="text-gray-300 mt-5 font-mono text-xl drop-shadow-md text-center">尝试所有你未曾经历的事情，不论好坏。</div>
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts"></script>
