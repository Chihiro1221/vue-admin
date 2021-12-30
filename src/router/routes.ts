import { RouteRecordRaw } from 'vue-router'
export default [
    {
        path: '/',
        component: () => import('@/views/home.vue'),
    },
] as RouteRecordRaw[]
