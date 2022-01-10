<script setup lang="ts">
import { user } from '@/store/user'
const userStore = user()
</script>

<template>
	<div class="bg-white py-2 px-5 flex justify-between items-center">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
			<el-breadcrumb-item>promotion list</el-breadcrumb-item>
			<el-breadcrumb-item>promotion detail</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="cursor-pointer relative group">
			<div class="flex items-center">
				<img :src="userStore.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
				<span class="ml-1 text-sm">{{ userStore.info?.name }}</span>
			</div>
			<section class="group-hover:block absolute top-full bg-white p-3 right-0 rounded-md shadow-sm hidden">
				<div class="py-2 flex items-center border-b">
					<i class="fas fa-adjust text-xs"></i>
					<a class="ml-1 text-gray-700 text-xs whitespace-nowrap">用户管理</a>
				</div>
				<div class="py-2 flex items-center border-b">
					<i class="fas fa-adjust text-xs"></i>
					<a class="ml-1 text-gray-700 text-xs whitespace-nowrap">会员中心</a>
				</div>
				<div class="py-2 flex items-center border-b">
					<i class="fas fa-adjust text-xs"></i>
					<a class="ml-1 text-gray-700 text-xs whitespace-nowrap">帮助中心</a>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
