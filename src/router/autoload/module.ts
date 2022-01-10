import { RouteRecordRaw } from 'vue-router'
export default function registryModuleRoutes() {
	const routes = [] as RouteRecordRaw[]
	const modules = import.meta.globEager('../module/**/*.ts')
	Object.keys(modules).forEach(key => {
		routes.push(modules[key].default)
	})
	return routes
}
