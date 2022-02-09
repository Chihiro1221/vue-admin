import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传图片成功',
        type: 'success',
        result: {
          url: '/images/1.JPG',
        },
      }
    },
  },
] as MockMethod[]
