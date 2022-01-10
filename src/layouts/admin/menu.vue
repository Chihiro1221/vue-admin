<script setup lang="ts">
import { useStore } from '@/store/router'
import { ref } from 'vue'
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'
// interface IMenuItem {
// 	title: string
// 	icon?: string
// 	active?: boolean
// }
// interface IMenu extends IMenuItem {
// 	children?: IMenuItem[]
// }

// const menus = ref<IMenu[]>([
// 	{
// 		title: '错误页面',
// 		icon: 'fab fa-algolia',
// 		active: true,
// 		children: [{ title: '403 页面', active: true }, { title: '404 页面' }, { title: '500 页面' }],
// 	},
// 	{
// 		title: '编辑器',
// 		icon: 'fab fa-buysellads',
// 		children: [{ title: 'markdown 编辑器' }, { title: '富文本编辑器' }],
// 	},
// ])

const routerStore = useStore()
const router = useRouter()
const reset = () => {
	routerStore.routes.forEach(proute => {
		proute.meta.isActive = false
		proute.children?.forEach(croute => {
			if (croute.meta) {
				croute.meta.isActive = false
			}
		})
	})
}
const changeMenu = (proute: RouteRecordNormalized, croute?: RouteRecordRaw) => {
	reset()
	proute.meta.isActive = true
	if (croute && croute.meta) {
		croute.meta.isActive = true
		router.push(croute!)
	}
}
</script>

<template>
	<div class="menu hidden md:block">
		<div class="logo">
			<i class="fab fa-angular text-[50px] mr-2"></i>
			<span class="text-lg">公司名称</span>
		</div>
		<div class="menu-container">
			<dl v-for="(route, index) of routerStore.routes" :key="index">
				<dt @click="changeMenu(route)">
					<div>
						<i :class="route.meta.icon" class="mr-2 text-2xl"></i>
						<span>{{ route.meta.title }}</span>
					</div>
					<i class="fas fa-angle-down rotate-90 duration-300" :class="{ 'rotate-0': route.meta.isActive }"></i>
				</dt>
				<dd
					@click="changeMenu(route, croute)"
					v-show="route.meta.isActive"
					:class="{ active: croute.meta?.isActive }"
					v-for="(croute, key) of route.children"
					:key="key"
				>
					{{ croute.meta?.title }}
				</dd>
			</dl>
		</div>
	</div>
</template>

<style scoped lang="scss">
.menu {
	@apply w-[200px] bg-gray-800 p-4;
	.logo {
		@apply text-white flex items-center justify-center;
	}
	.menu-container {
		@apply mt-5;
		dl {
			@apply text-white mt-5;
			dt {
				@apply flex items-center justify-between cursor-pointer;
				div {
					@apply flex items-center;
				}
			}
			dd {
				@apply mt-3 py-2 pl-2  rounded-md  duration-300 cursor-pointer bg-gray-600 hover:bg-violet-500;
				&.active {
					@apply bg-violet-700;
				}
			}
		}
	}
}
</style>
