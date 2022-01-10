import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import registryModuleRoutes from './module'
import getRoutes from './view'
let routes = [] as RouteRecordRaw[]

if (env.VITE_ROUTER_AUTOLOAD) {
	routes = getRoutes()
} else {
	routes = registryModuleRoutes()
}
export default routes
