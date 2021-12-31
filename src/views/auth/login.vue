<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({
	account: '',
	password: '',
})
</script>

<template>
	<div class="bg-slate-300 h-screen flex justify-center items-center px-6 md:px-0">
		<div class="w-[720px] bg-white rounded-md shadow-md grid md:grid-cols-2 -translate-y-6">
			<div class="p-6 text-center text-gray-700 text-lg">
				<div>账号登陆</div>
				<div class="mt-6">
					<hdInput v-model="form.account" placeholder="请输入邮箱或手机号" />
					<hdInput v-model="form.password" placeholder="请输入登录密码" class="mt-3" />
				</div>
				<hdButton class="mt-5" />
				<div class="flex mt-6 text-xs text-gray-700 justify-center gap-2">
					<hdLink />
					<hdLink />
					<hdLink />
					<hdLink />
				</div>
			</div>
			<div class="hidden md:block">
				<img src="/images/login.jpg" alt="" class="h-[400px] w-full object-cover" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
