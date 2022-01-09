import { RouteLocationNormalized, Router } from 'vue-router'
import { store } from '@/utils'

class Guard {
	constructor(private router: Router) {}
	public run() {
		this.router.beforeEach((to, from) => {
			let token = store.get('token')?.token
			if (!this.isAuthRoute(to, token)) return { name: 'auth.login' }
			if (this.isGuestRoute(to, token)) return from
		})
	}
	private isGuestRoute(route: RouteLocationNormalized, token: string | undefined): boolean {
		return Boolean(route.meta.guest && token)
	}
	private isAuthRoute(route: RouteLocationNormalized, token: string | undefined): boolean {
		return Boolean(!route.meta.auth || (route.meta.auth && token))
	}
}
export default (router: Router) => {
	new Guard(router).run()
}
