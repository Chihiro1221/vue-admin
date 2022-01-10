<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ title: string }[]>([{ title: '用户管理' }, { title: '会员中心' }, { title: '富文本编辑器' }])
</script>

<template>
	<div class="hidden md:grid grid-flow-col gap-2 justify-start px-5 p-3 bg-gray-50 border-t border-b shadow-sm">
		<a
			href="#"
			v-for="(link, index) in links"
			:key="index"
			class="bg-white py-2 px-3 text-sm rounded-md shadow-sm hover:shadow-md hover:bg-violet-500 hover:text-white duration-300 border"
		>
			<span>{{ link.title }}</span>
			<i class="fas fa-times ml-2"></i>
		</a>
	</div>
</template>

<style scoped lang="scss"></style>
