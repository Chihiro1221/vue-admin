// typings.d.ts or menuStore.ts
import 'vue-router'
import { IMenu } from '#/menu'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    // 菜单显示
    menu?: IMenu
    permission?: string
  }
}
