<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue'
const content = ref('<p>hello World</p>')
</script>

<template>
  <div>
    <Editor v-model="content" />
    <p class="bg-gray-200 p-2 border mt-2">{{ content }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
