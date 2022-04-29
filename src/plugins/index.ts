import {App} from 'vue'
import setupTailwindcss from './tailwindcss'
import setupElementPlus from './elementui'
import setupPinia from './pinia'
import _ from 'lodash'
import setupIconPark from "@/plugins/iconpark";
// 自己封装的转驼峰函数
// import { changeHump } from '../utils/Hump'

export function setupPlugins(app: App) {
  //   autoRegisterComponent(app)
  setupTailwindcss()
  setupElementPlus(app)
  setupPinia(app)
  setupIconPark(app)
}

// 自动注册全局组件
// function autoRegisterComponent(app: App) {
//   const components = import.meta.globEager('../components/hd/*.vue')
//   Object.keys(components).forEach(item => {
//     let name = item.split('/').at(-1)?.split('.').at(0) as string
//     app.component(_.camelCase(name), components[item].default)
//   })
// }
