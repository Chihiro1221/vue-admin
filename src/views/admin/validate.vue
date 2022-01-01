<script setup lang="ts">
import v from '@/plugins/validate'
const { errors, handleSubmit } = v.useForm({
	initialValues: {
		username: '',
		password: '',
	},
	validationSchema: {
		username: v.yup.string().required().email().label('账号'),
		password: { required: true },
	},
})
const { value: usernameValue } = v.useField('username', {}, { label: '用户名' })
const { value: passwordValue } = v.useField('password', {}, { label: '密码' })

const onSubmit = handleSubmit(values => {
	console.log(values)
	alert('验证通过')
})
</script>

<template>
	<form @submit="onSubmit">
		<input type="text" v-model="usernameValue" />
		<span v-if="errors.username" class="error">{{ errors.username }}</span>
		<input type="password" v-model="passwordValue" />
		<span v-if="errors.password" class="error">{{ errors.password }}</span>
		<button>提交</button>
	</form>
</template>

<style scoped lang="scss">
form {
	@apply flex justify-center items-center h-screen bg-gray-700 text-white flex-col;
	input {
		@apply border-4 p-2 border-violet-700 rounded-md outline-none text-gray-800;
	}
	button {
		@apply border bg-violet-700 outline-none rounded-md px-1;
	}
	.error {
		@apply bg-red-600 text-white p-2 mt-1 w-[200px];
	}
}
</style>
