<script setup lang="ts">
import { nextTick } from 'process'
import wangEditor from './wangEditor'

export interface Props {
  height?: number
  modelValue?: string
  uploadImgServer?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 500,
  modelValue: '',
  uploadImgServer: '/api/upload/image',
})

const emit = defineEmits(['update:modelValue'])
nextTick(() => {
  new wangEditor(
    '#editor',
    (newHtml: string) => {
      emit('update:modelValue', newHtml)
    },
    props
  )
})
</script>

<template>
  <div id="editor"></div>
</template>

<style scoped lang="scss">
#editor {
  z-index: 10 !important;
}
</style>
