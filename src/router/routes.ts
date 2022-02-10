import { RouteRecordRaw } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/home.vue') },
  { path: '/login', name: 'login', meta: { guest: true }, component: () => import('@/views/auth/login.vue') },
  { path: '/:any(.*)', component: () => import('@/views/errors/404.vue') },
  { path: '/article', name: 'article', component: () => import('@/views/article.vue') },
] as RouteRecordRaw[]
export default routes
