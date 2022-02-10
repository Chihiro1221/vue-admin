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
    '#wangEditor',
    (newHtml: string) => {
      emit('update:modelValue', newHtml)
    },
    props
  )
})
</script>

<template>
  <div id="wangEditor"></div>
</template>

<style scoped lang="scss">
#wangEditor {
  z-index: 10 !important;
  position: relative;
}
</style>
