import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
// 自己封装的转驼峰函数
// import { changeHump } from '../utils/Hump'
import _ from 'lodash'
export function setupPlugins(app: App) {
	autoRegisterComponent(app)

	setupTailwindcss()
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
	const components = import.meta.globEager('../components/form/*.vue')
	Object.keys(components).forEach(item => {
		let name = item.split('/').at(-1)?.split('.').at(0) as string
		// 自己封装
		// name = changeHump(name)
		app.component(_.camelCase(name), components[item].default)
	})
}
