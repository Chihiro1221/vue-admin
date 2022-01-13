import utils from '@/utils'
import {RouteRecordRaw} from 'vue-router'
import registryModuleRoutes from './module'
import getRoutes from './view'

let routes = [] as RouteRecordRaw[]

if (utils.env.VITE_ROUTER_AUTOLOAD) {
    routes = getRoutes()
} else {
    routes = registryModuleRoutes()
}
export default routes
