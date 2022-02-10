<script setup lang="ts">
import menuService from '@/composables/menu'
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
  <div class="menu-container" :class="{ close: menuService.close.value }">
    <div class="menu">
      <div class="logo">
        <i class="fab fa-asymmetrik text-[40px] mr-2 mt-2"></i>
        <span class="text-lg"></span>
      </div>
      <div class="container">
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
    <div @click="menuService.toggleState" class="cover"></div>
  </div>
</template>

<style scoped lang="scss">
.menu-container {
  .menu {
    @apply w-[200px] bg-gray-800 duration-300 h-screen z-50;
    .logo {
      @apply text-white flex items-center justify-center;
    }
    .container {
      @apply mt-5;
      dl {
        @apply text-white mt-5;
        dt {
          @apply px-4 flex items-center justify-between cursor-pointer;
          div {
            @apply flex items-center;
          }
        }
        dd {
          div {
            @apply mt-3 py-2 mx-4 rounded-md pl-4  duration-300 cursor-pointer bg-gray-700 hover:bg-violet-500;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .menu-container {
    &.close {
      .menu {
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
                  z-index: 999 !important;
                  @apply m-0 relative rounded-none;
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
}
@media screen and (max-width: 768px) {
  .menu-container {
    @apply relative;
    .menu {
      @apply absolute top-0 left-0 h-screen w-[200px] z-50;
    }
    .cover {
      @apply bg-gray-200 absolute top-0 left-0 w-screen h-screen z-30 opacity-75;
    }
    &.close {
      display: none;
      .cover {
        @apply hidden;
      }
    }
  }
}
</style>
