import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { icon: 'far fa-edit', title: '编辑器' } },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { menu: { title: 'markdown' } },
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { menu: { title: '富文本编辑器' } },
    },
  ],
} as RouteRecordRaw
