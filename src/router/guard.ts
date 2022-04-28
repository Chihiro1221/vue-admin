import {RouteLocationNormalized, Router} from 'vue-router'
import {isLogin} from "@/utils/user";

class Guard {
  constructor(private router: Router) {
  }

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.meta.auth && !isLogin()) return {name: 'login'}
    if (to.meta.guest && isLogin()) return from
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
