import { defineStore } from 'pinia'
import { IMenu } from '#/menu'
import router from '@/router'

export const menuStore = defineStore('menu', {
  state: () => ({
    menus: [] as IMenu[],
  }),
  actions: {
    init() {
      this.getMenusByRoute()
    },
    getMenusByRoute() {
      this.menus = router
        .getRoutes()
        .filter(route => route.children.length && route.meta?.menu)
        .map(route => {
          let data = route.meta.menu!
          route.meta.menu!.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return route.meta?.menu
            }) as IMenu[]
          return data
        })
        .filter(menu => menu.children?.length)
    },
  },
})
