<script setup lang="ts">
import userApi from '@/apis/user'
// const response = await fetch(`http://localhost:3000/api/get`).then(r => r.json())
// console.log(response)

// const user = await userApi.info()
// console.log(user.result.avatar)

const login = await userApi.login()
console.log(login)
</script>

<template>
    <h2 class="bg-red-500 text-white">首页 - home.vue</h2>
</template>

<style scoped lang="scss"></style>
