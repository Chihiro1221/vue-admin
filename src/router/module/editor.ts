import { RouteRecordRaw } from 'vue-router'

export default {
	name: 'editor',
	path: '/editor',
	component: () => import('@/layouts/editor.vue'),
	meta: { show: true, icon: 'far fa-edit', title: '编辑器' },
	children: [
		{
			name: 'markdown',
			path: 'markdown',
			component: () => import('@/views/editor/markdown.vue'),
			meta: { show: true, title: ' 富文本编辑器' },
		},
		{
			name: 'base',
			path: 'base',
			component: () => import('@/views/editor/base.vue'),
		},
	],
} as RouteRecordRaw
