import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class Axios {
	private instance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors()
	}

	public request<T, D = responseResult<T>>(config: AxiosRequestConfig) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await this.instance.request<D>(config)
				resolve(response.data)
			} catch (error) {
				reject(error)
			}
		}) as Promise<D>
	}
	private interceptors() {
		this.requestInterceptor()
		this.responseInterceptor()
	}

	private requestInterceptor() {
		this.instance.interceptors.request.use(
			config => {
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)
	}
	private responseInterceptor() {
		this.instance.interceptors.response.use(
			response => {
				return response
			},
			error => {
				return Promise.reject(error)
			}
		)
	}
}
