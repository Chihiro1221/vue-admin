<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

const input = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input type="text" class="hd-input" :value="props.modelValue" @input="input" />
</template>

<style scoped lang="scss"></style>
