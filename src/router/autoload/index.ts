import { userStore } from '@/store/userStore'
import utils from '@/utils'
import { Router, RouteRecordRaw } from 'vue-router'
import registryModuleRoutes from './module'
import getRoutes from './view'

let routes: RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : registryModuleRoutes()

function autoload(router: Router) {
  const user = userStore()
  routes.forEach(route => {
    route.children = route.children?.filter(r => {
      const permission = r.meta?.permission
      return permission ? user.info?.permissions?.includes(permission) : true
    })
    router.addRoute(route)
  })
}
export default autoload
