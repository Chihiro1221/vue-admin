<script setup lang="ts">
import menuComponent from './admin/menu.vue'
</script>

<template>
	<div class="admin">
		<menuComponent />
		<router-view />
	</div>
</template>

<style scoped lang="scss">
.admin {
	@apply w-screen h-screen flex;
}
</style>

<script lang="ts">
export default {
	route: { meta: { auth: true } },
}
</script>
