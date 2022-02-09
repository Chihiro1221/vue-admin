<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue'
import { ref } from 'vue-demi'
const content = ref('')
</script>

<template>
  <div>
    <Editor v-model="content" :height="500" placeholder="请输入 markdown 内容" />
  </div>
</template>

<style scoped lang="scss"></style>
