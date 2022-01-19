import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
    },
  ],
} as RouteRecordRaw
