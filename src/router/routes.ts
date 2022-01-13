import {RouteRecordRaw} from 'vue-router'

const routes = [
    // @ts-ignore
    {path: '/', name: 'home', component: () => import('@/views/home.vue')},
    {path: '/:any(.*)', component: () => import('@/views/errors/403.vue')},
    {path: '/login', name: 'login', meta: {guest: true}, component: () => import('@/views/auth/login.vue')},
] as RouteRecordRaw[]
export default routes
