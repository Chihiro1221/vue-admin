import { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';
import { IMenu } from '#/menu';
import router from '@/router';
import utils from '@/utils';
import { cacheEnum } from '@/enum/cacheEnum';

export default defineStore('menu', {
  state: () => ({
    menus: [] as IMenu[],
    historyMenu: [] as IMenu[],
  }),
  actions: {
    init() {
      this.getMenusByRoute();
      this.historyMenu = utils.store.get(cacheEnum.HISTORY_MENU) || [];
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta.menu) return;
      const ishas = this.historyMenu.some(menu => menu.route === route.name);
      if (this.historyMenu.length > 10) return;
      if (!ishas) this.historyMenu.unshift({ ...route.meta.menu, route: route.name as string });
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu);
    },
    removeHistoryMenu(route: IMenu) {
      const index = this.historyMenu.indexOf(route);
      this.historyMenu.splice(index, 1);
      utils.store.set(cacheEnum.HISTORY_MENU, this.historyMenu);
    },
    getMenusByRoute() {
      this.menus = router
        .getRoutes()
        .filter(route => route.children.length && route.meta?.menu)
        .map(route => {
          let data = { ...route.meta.menu, route: route.name as string }!;
          data.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => {
              return { ...route.meta?.menu, route: route.name };
            }) as IMenu[];
          return data;
        })
        .filter(menu => menu.children?.length);
    },
  },
});
