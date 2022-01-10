// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		auth?: boolean
		guest?: boolean
		// 菜单显示
		show?: boolean
		title?: string
		icon?: string
		isActive?: boolean
		// 权限控制
		permissions?: string[]
	}
}
