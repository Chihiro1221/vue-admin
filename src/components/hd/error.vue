<script setup lang="ts">
interface Prop {
  error: string;
}

const props = withDefaults(defineProps<Prop>(), {
  error: ''
})
</script>

<template>
  <div v-show="props.error" class="hd-error">{{ props.error }}</div>
</template>

<style scoped lang="scss">

</style>
