import axios, { AxiosRequestConfig } from 'axios';
import utils from '@/utils';
import { cacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import errorStore from '@/store/errorStore';

export default class Axios {
  private instance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }

  public request<T, D = responseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<D>;
  }

  private interceptors() {
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private requestInterceptor() {
    this.instance.interceptors.request.use(
      config => {
        config.headers = {
          Authorization: `Bearer ${utils.store.get(cacheEnum.TOKEN_NAME)?.token}`,
        };
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  private responseInterceptor() {
    this.instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        switch (error.response?.code) {
          case 401:
            utils.store.remove(cacheEnum.TOKEN_NAME);
            void router.push({ name: 'login' });
            break;
          // 后台表单验证失败
          case 422:
            errorStore().errors = {};
            break;
        }
        return Promise.reject(error);
      }
    );
  }
}
