<script setup lang="ts">
import { IMenu } from '#/menu'
import menuService from '@/composables/menu'
import router from '@/router'
import { watch } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
const route = useRoute()

watch(
  route,
  (route: RouteLocationNormalizedLoaded) => {
    menuService.setCurrentMenu(route)
  },
  { immediate: true }
)
// const reset = () => {
//   menuService.menus.value.forEach(menu => {
//     menu.isActive = false
//     menu.children?.forEach(cmenu => {
//       cmenu.isActive = false
//     })
//   })
// }

// const changeMenu = (menu: IMenu, cmenu?: IMenu) => {
//   reset()
//   menu.isActive = true
//   if (cmenu) {
//     cmenu.isActive = true
//     router.push({
//       name: cmenu!.route,
//     })
//   }
// }
</script>

<template>
  <div class="menu" :class="{ close: menuService.close.value }">
    <div class="logo mt-2">
      <i class="fab fa-angular text-[40px] mr-2"></i>
      <span class="text-lg"></span>
    </div>
    <div class="container">
      <dl>
        <dt :class="{ 'p-2': true, 'bg-violet-700': $route.name === 'admin.home' }" @click="$router.push({ name: 'admin.home' })">
          <div>
            <i class="mr-2 text-xl fas fa-home"></i>
            <span>dashboard</span>
          </div>
        </dt>
      </dl>
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menuService.close.value ? '' : (menu.isActive = true)">
          <div>
            <i :class="menu.icon" class="mr-2 text-xl"></i>
            <span>{{ menu.title }}</span>
          </div>
          <i class="fas fa-angle-down rotate-90 duration-300" :class="{ 'rotate-0': menu.isActive }"></i>
        </dt>
        <dd v-show="menu.isActive">
          <div
            @click="$router.push({ name: cmenu.route })"
            :class="{ active: cmenu.isActive && !menuService.close.value }"
            v-for="(cmenu, key) of menu.children"
            :key="key"
          >
            {{ cmenu?.title }}
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <div class="bg bg-gray-200 absolute top-0 left-0 w-full h-screen z-40 opacity-75 hidden"></div>
</template>

<style scoped lang="scss">
.menu {
  @apply w-[200px] bg-gray-800 duration-300;
  .logo {
    @apply text-white flex items-center justify-center;
  }
  .container {
    @apply mt-5;
    dl {
      @apply text-white mt-5;
      dt {
        @apply px-2 flex items-center justify-between cursor-pointer;
        div {
          @apply flex items-center;
        }
      }
      dd {
        div {
          @apply mt-3 py-2 pl-2  duration-300 cursor-pointer bg-gray-700 hover:bg-violet-500;
          &.active {
            @apply bg-violet-700;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu {
    &.close {
      @apply w-[80px];

      .logo {
        @apply flex justify-center items-center;
        i {
          @apply mr-0;
        }
        span {
          @apply hidden;
        }
      }
      .container {
        dl {
          @apply relative;
          &:hover {
            dd {
              display: block !important;
              @apply absolute top-0 left-full bg-gray-600 z-50 w-[200px] duration-300;
              div {
                @apply m-0;
              }
            }
          }
          dt {
            @apply flex justify-center items-center;
            div {
              i {
                @apply mr-0;
              }

              span {
                @apply hidden;
              }
            }
            > i {
              @apply hidden;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .menu {
    @apply absolute top-0 left-0 h-screen w-[200px] z-50;
    &.close {
      display: none;
    }
  }
}
</style>
