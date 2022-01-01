<script setup lang="ts">
import { ref } from 'vue'
import v from '@/plugins/validate'

const { Field, Form } = v
const account = ref<string>('')
const onSubmit = (values: any) => {
	console.log(values)
	alert('验证通过')
}
</script>
<template>
	<Form @submit="onSubmit">
		<Field name="account" label="账号" :rules="{ required: true, email: true }" :validate-on-input="true" #default="{ field, errorMessage }">
			<input type="text" v-bind="field" v-model="account" />
			<span>{{ errorMessage }}</span>
		</Field>
		<button class="mt-5">提交表单</button>
	</Form>
</template>

<style scoped lang="scss">
Form {
	@apply flex justify-center items-center h-screen bg-gray-700 text-white flex-col;
	input {
		@apply border-4 p-2 border-violet-700 rounded-md outline-none text-gray-800;
	}
	button {
		@apply border bg-violet-700 outline-none rounded-md px-1;
	}
}
</style>
