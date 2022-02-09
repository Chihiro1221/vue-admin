import { http } from '@/plugins/axios'

export interface IUploadImage {
  url: string
}
class UploadImageApi {
  upload(data: FormData) {
    return http.request<IUploadImage>({
      url: 'upload/image',
      method: 'post',
      data,
    })
  }
}

export default new UploadImageApi()
