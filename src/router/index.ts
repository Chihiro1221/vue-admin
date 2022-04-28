import {App} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import autoload from './autoload'
import guard from './guard'
import {userStore} from '@/store/userStore'
import menuService from '@/composables/menu'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  await userStore().getUserInfo()
  autoload(router)
  guard(router)
  app.use(router)
  menuService.init()
}

export default router
