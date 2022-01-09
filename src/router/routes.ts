import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'home', meta: {}, component: () => import('@/views/home.vue') },
	{ path: '/:any(.*)', component: () => import('@/views/NotFound.vue') },
]
export default routes
