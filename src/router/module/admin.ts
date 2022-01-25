import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { icon: 'fas fa-home', title: 'Dashboard' } },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
      meta: { auth: true, menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw
