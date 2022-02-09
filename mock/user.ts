import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          name: '张三',
          age: 18,
          avatar: '/images/1.JPG',
          permissions: ['markdown_editor', 'base_editor', 'error_404'],
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        type: 'success',
        result: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]
