import {RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw} from 'vue-router'
import {cacheEnum} from './../enum/cacheEnum'
import router from '@/router'
import utils from '@/utils'
import {ref} from 'vue'
import {IMenu} from '#/menu'

class Menu {
  public menus = ref<IMenu[]>([])
  public history = ref<IMenu[]>([])
  public close = ref(utils.store.get(cacheEnum.MENU_IS_CLOSE)?.close ?? false)
  public currentRoute = ref<null | RouteLocationNormalizedLoaded>(null)

  // 初始化
  public init() {
    this.menus.value = this.getMenusByRoute()
    this.history.value = this.getHistoryMenu()
    this.findParent()
  }

  private getHistoryMenu() {
    const historyMenu: IMenu[] = utils.store.get(cacheEnum.HISTORY_MENU) || []
    const children = [] as RouteRecordRaw[]
    router.getRoutes().map(route => children.push(...route.children))

    return historyMenu.filter(menu => children.some(route => route.name === menu.route))
  }

  // 切换收缩状态
  public toggleState() {
    this.close.value = !this.close.value
    utils.store.set(cacheEnum.MENU_IS_CLOSE, {close: this.close.value})
    if (this.close.value) {
      this.menus.value.forEach(m => {
        m.isActive = false
      })
    } else {
      this.findParent()
    }
  }

  // 查询父级
  private findParent() {
    this.menus.value.forEach(m => {
      m.children?.forEach(c => {
        if (c.isActive) {
          m.isActive = true
          c.isActive = true
        }
      })
    })
  }

  // 激活当前菜单
  public setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach(m => {
      m.isActive = false
      m.children?.forEach(c => {
        c.isActive = false
        if (c.route === route.name) {
          if (!this.close.value) m.isActive = true
          c.isActive = true
        }
      })
    })
  }

  // 清除历史菜单
  public removeHistoryMenu(route: IMenu) {
    const index = this.history.value.indexOf(route)
    this.history.value.splice(index, 1)
    utils.store.set(cacheEnum.HISTORY_MENU, this.history.value)
  }

  // 添加历史菜单
  public addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta.menu) return
    this.currentRoute.value = route
    const ishas = this.history.value.some(menu => menu.route === route.name)
    if (this.history.value.length > 10) return
    if (!ishas) this.history.value.unshift({...route.meta.menu, route: route.name as string})
    utils.store.set(cacheEnum.HISTORY_MENU, this.history.value)
  }

  // 获取菜单
  private getMenusByRoute() {
    return router
        .getRoutes()
        .filter(route => route.children.length && route.meta?.menu)
        .map(route => {
          let data = {...route.meta.menu, route: route.name as string}!
          data.children = route.children
              .filter(route => route.meta?.menu)
              .map(route => {
                return {...route.meta?.menu, route: route.name}
              }) as IMenu[]
          return data
        })
        .filter(menu => menu.children?.length) as IMenu[]
  }
}

export default new Menu()
