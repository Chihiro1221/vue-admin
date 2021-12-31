import { RouteRecordRaw } from 'vue-router'
const routes = [
	{ path: '/', component: () => import('@/views/home.vue') },
	{ path: '/:any(.*)', component: () => import('@/views/NotFound.vue') },
]

export default routes
