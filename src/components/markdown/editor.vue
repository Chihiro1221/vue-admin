<script setup lang="ts">
import { nextTick } from 'vue';
import toastEditor from './toastEditor';

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: 500,
  placeholder: '',
});
const emit = defineEmits(['update:modelValue']);

nextTick(() => {
  const toast = new toastEditor('#editor', `${props.height}px`, props.modelValue);
  toast.editor.on('change', type => {
    emit('update:modelValue', toast.editor[type === 'markdown' ? 'getMarkdown' : 'getHTML']());
  });
});
</script>

<template>
  <div id="editor"></div>
</template>

<style lang="scss">
#editor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }
  &.fullscreen {
    height: 100vh !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
