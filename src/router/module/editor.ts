import { RouteRecordRaw } from 'vue-router'
import markdown from '@/views/editor/markdown.vue'
export default {
  path: '/editor',
  name: 'editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { icon: 'far fa-edit', title: '编辑器' } },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { permission: 'markdown_editor', menu: { title: 'markdown' } },
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { permission: 'base_editor', menu: { title: '富文本编辑器' } },
    },
  ],
} as RouteRecordRaw