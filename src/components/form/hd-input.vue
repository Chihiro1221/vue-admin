<script setup lang="ts">
const props = defineProps({
	modelValue: String,
})
</script>

<template>
	<input type="text" class="hd-input" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped lang="scss">
.hd-input {
	@apply w-full py-1 px-2 border rounded-sm outline-none placeholder:text-sm focus:ring-2 ring-offset-2 ring-indigo-600 duration-300 focus:border-white;
}
</style>
