<script setup lang="ts">
import v from '@/plugins/validate'
import utils from "@/utils";

const {yup, useForm, useFields} = v
const schema = {
  account: yup.string().required().matches(/^\d{11}|.+@.+\..+$/, '手机号或邮箱不合法').label('账号'),
  password: yup.string().required().min(3, '密码不少于3个字符').label('密码'),
}
const {handleSubmit, values, errors} = useForm({
  initialValues: {
    account: '2213595911@qq.com',
    password: 'youzhi..',
  }, validationSchema: schema
})
useFields(Object.keys(schema))

const onSubmit = handleSubmit((values) => {
  utils.user.login(values)
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="w-[720px] bg-white rounded-md shadow-md grid md:grid-cols-2 -translate-y-6">
      <div class="p-6 text-center text-gray-700 text-lg flex flex-col justify-between">
        <div>
          <div>账号登陆</div>
          <div class="mt-6">
            <HdInput v-model="values.account"/>
            <HdError :error="errors.account"/>
            <HdInput class="mt-2" v-model="values.password"/>
            <HdError :error="errors.password"/>
          </div>
          <HdButton class="mt-5 w-full"/>
          <div class="mt-3 flex justify-center items-center">
            <i class="fab fa-weixin bg-green-600 text-white p-1 rounded-full box-border cursor-pointer"></i>
          </div>
        </div>
        <div class="flex mt-6 text-xs text-gray-700 justify-center gap-2">
          <HdLink/>
          <HdLink/>
          <HdLink/>
          <HdLink/>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" alt="" class="h-[300px] h-full w-full object-cover absolute"/>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-center px-6 md:px-0;
}
</style>
