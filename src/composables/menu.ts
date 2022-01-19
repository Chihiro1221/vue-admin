import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import { cacheEnum } from './../enum/cacheEnum'
import router from '@/router'
import utils from '@/utils'
import { ref } from 'vue'
import { IMenu } from './../../types/menu'
class Menu {
  public menus = ref<IMenu[]>([])
  public history = ref<IMenu[]>([])
  public close = ref(true)
  public init() {
    this.menus.value = this.getMenusByRoute()
    this.history.value = utils.store.get(cacheEnum.HISTORY_MENU) || []
  }
  public toggleState() {
    this.close.value = !this.close.value
  }
  public setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach(m => {
      m.isActive = false
      m.children?.forEach(c => {
        c.isActive = false
        if (c.route === route.name) {
          m.isActive = true
          c.isActive = true
        }
      })
    })
  }

  public removeHistoryMenu(route: IMenu) {
    const index = this.history.value.indexOf(route)
    this.history.value.splice(index, 1)
    utils.store.set(cacheEnum.HISTORY_MENU, this.history.value)
  }

  public addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta.menu) return
    const ishas = this.history.value.some(menu => menu.route === route.name)
    if (this.history.value.length > 10) return
    if (!ishas) this.history.value.unshift({ ...route.meta.menu, route: route.name as string })
    utils.store.set(cacheEnum.HISTORY_MENU, this.history.value)
  }

  private getMenusByRoute() {
    return router
      .getRoutes()
      .filter(route => route.children.length && route.meta?.menu)
      .map(route => {
        let data = { ...route.meta.menu, route: route.name as string }!
        data.children = route.children
          .filter(route => route.meta?.menu)
          .map(route => {
            return { ...route.meta?.menu, route: route.name }
          }) as IMenu[]
        return data
      })
      .filter(menu => menu.children?.length) as IMenu[]
  }
}

export default new Menu()
