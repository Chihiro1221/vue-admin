<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
</script>

<template>
  <input type="text" class="hd-input" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped lang="scss"></style>
