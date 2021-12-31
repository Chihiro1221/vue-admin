<script setup lang="ts"></script>

<template>
	<input type="text" placeholder="请输入邮箱或手机号" class="hd-input" />
</template>

<style scoped lang="scss">
.hd-input {
	@apply w-full py-1 px-2 border rounded-sm outline-none placeholder:text-sm focus:ring-2 ring-offset-2 ring-indigo-600 duration-300 focus:border-white;
}
</style>
