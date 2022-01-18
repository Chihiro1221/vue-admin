import { menuStore } from './../store/menuStore'
import { RouteLocationNormalized, Router } from 'vue-router'
import utils from '@/utils'
import { userStore } from '@/store/userStore'
import { cacheEnum } from '@/enum/cacheEnum'

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (!this.isAuthRoute(to)) return { name: 'login' }
    if (this.isGuestRoute(to)) return from
    Guard.getUserInfo()
  }

  token(): string | undefined {
    return utils.store.get(cacheEnum.TOKEN_NAME)?.token
  }

  // 获取用户信息
  static async getUserInfo() {
    userStore().getUserInfo()
  }

  // 游客
  private isGuestRoute(route: RouteLocationNormalized): boolean {
    return Boolean(route.meta.guest && this.token())
  }

  // 登录
  private isAuthRoute(route: RouteLocationNormalized): boolean {
    const state = Boolean(!route.meta.auth || (route.meta.auth && this.token()))
    // 拦截之后如果需要登录那么将要跳转的路由暂时存储到本地存储中，登录成功之后再跳回
    if (!state) {
      utils.store.set(cacheEnum.REDIRECT_ROUTE_NAME, { route_name: route.name })
    }
    return state
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
