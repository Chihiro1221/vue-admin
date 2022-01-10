import { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'
import { user } from '@/store/user'

class Guard {
	constructor(private router: Router) {}
	public run() {
		this.router.beforeEach(this.beforeEach.bind(this))
	}
	beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		if (!this.isAuthRoute(to)) return { name: 'login' }
		if (this.isGuestRoute(to)) return from
		this.getUserInfo()
	}
	token(): string | undefined {
		return store.get('token')?.token
	}
	private async getUserInfo() {
		user().getUserInfo()
	}
	// 游客
	private isGuestRoute(route: RouteLocationNormalized): boolean {
		return Boolean(route.meta.guest && this.token())
	}
	// 登录
	private isAuthRoute(route: RouteLocationNormalized): boolean {
		return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
	}
}
export default (router: Router) => {
	new Guard(router).run()
}
