import { RouteRecordRaw } from 'vue-router'
export default {
	path: '/error',
	name: 'error',
	component: () => import('@/layouts/admin.vue'),
	meta: { show: true, icon: 'fas fa-times-circle', title: ' 错误页面', auth: true },
	children: [
		{
			path: '403',
			name: 'error.403',
			component: () => import('@/views/errors/403.vue'),
			meta: { show: true, title: '403 页面' },
		},
		{
			path: '404',
			name: 'error.404',
			component: () => import('@/views/errors/404.vue'),
			meta: { show: true, title: '404 页面' },
		},
		{
			path: '500',
			name: 'error.500',
			component: () => import('@/views/errors/500.vue'),
		},
	],
} as RouteRecordRaw
