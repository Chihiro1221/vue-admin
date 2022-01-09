<script setup lang="ts">
import { ref } from 'vue'
interface IMenuItem {
	title: string
	icon?: string
	active?: boolean
}
interface IMenu extends IMenuItem {
	children?: IMenuItem[]
}
const menus = ref<IMenu[]>([
	{
		title: '错误页面',
		icon: 'fab fa-algolia',
		active: true,
		children: [{ title: '403 页面', active: true }, { title: '404 页面' }, { title: '500 页面' }],
	},
	{
		title: '编辑器',
		icon: 'fab fa-buysellads',
		children: [{ title: 'markdown 编辑器' }, { title: '富文本编辑器' }],
	},
])

const resetMenu = () => {
	menus.value.forEach(pmenu => {
		pmenu.active = false
		pmenu.children?.forEach(cmenu => (cmenu.active = false))
	})
}
const changeMenu = (pmenu: IMenu, cmenu?: IMenuItem) => {
	resetMenu()
	pmenu.active = true
	if (cmenu) cmenu.active = true
}
</script>

<template>
	<div class="menu">
		<div class="logo">
			<i class="fab fa-angular text-[50px] mr-2"></i>
			<span class="text-lg">公司名称</span>
		</div>
		<div class="menu-container">
			<dl v-for="(menu, index) of menus" :key="index">
				<dt @click="changeMenu(menu)">
					<div>
						<i :class="menu.icon" class="mr-2 text-2xl"></i>
						<span>{{ menu.title }}</span>
					</div>
					<i class="fas fa-angle-down"></i>
				</dt>
				<dd
					@click="changeMenu(menu, cmenu)"
					v-show="menu.active"
					:class="{ active: cmenu.active }"
					v-for="(cmenu, key) of menu.children"
					:key="key"
				>
					{{ cmenu.title }}
				</dd>
			</dl>
		</div>
	</div>
</template>

<style scoped lang="scss">
.menu {
	@apply w-[200px] bg-gray-700 p-4;
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
				@apply mt-3 py-2 pl-2  rounded-md  duration-300 cursor-pointer hover:bg-violet-500;
				&.active {
					@apply bg-violet-700;
				}
			}
		}
	}
}
</style>
