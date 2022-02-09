<script setup lang="ts">
import v from '@/plugins/validate'
import { IFormDate } from '@/apis/userApi'
import utils from '@/utils'

const { Field, Form, ErrorMessage } = v
const schema = v.yup.object({
  account: v.yup.string().required().email().label('账号'),
  password: v.yup.string().required().min(3).label('密码'),
})
const onSubmit = async (values: IFormDate) => {
  utils.user.login(values)
}
</script>
<script lang="ts">
export default {
  route: { meta: { guest: true } },
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div class="w-[720px] bg-white rounded-md shadow-md grid md:grid-cols-2 -translate-y-6">
      <div class="p-6 text-center text-gray-700 text-lg flex flex-col justify-between">
        <div>
          <div>账号登陆</div>
          <div class="mt-6">
            <Field
              class="hd-input"
              value="2213595911@qq.com"
              label="账号"
              name="account"
              placeholder="请输入邮箱或手机号"
            />
            <div v-if="errors.account" class="hd-error">请输入邮箱或手机号</div>
            <Field class="hd-input mt-3" value="admin888" label="密码" name="password" placeholder=" 请输入登录密码" />
            <ErrorMessage class="hd-error" name="password" />
          </div>
          <hdButton class="mt-5 w-full" />
          <div class="mt-3 flex justify-center items-center">
            <i class="fab fa-weixin bg-green-600 text-white p-1 rounded-full box-border cursor-pointer"></i>
          </div>
        </div>
        <div class="flex mt-6 text-xs text-gray-700 justify-center gap-2">
          <hdLink />
          <hdLink />
          <hdLink />
          <hdLink />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" alt="" class="h-[300px] h-full w-full object-cover absolute" />
      </div>
    </div>
  </Form>
</template>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-center px-6 md:px-0;
}
</style>
