<script setup lang="ts">
import gsap from 'gsap'
import { RendererElement } from 'vue'

interface Props {
  tag?: string | undefined
  duration?: number
  delay?: number
}
const props = withDefaults(defineProps<Props>(), {
  tag: undefined,
  duration: 1,
  delay: 0.2,
})

const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  })
}
const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  })
}
</script>

<template>
  <div class="animate">
    <transition-group :tag="tag" appear name="list" @before-enter="beforeEnter" @enter="enter">
      <slot />
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.animate {
  .list-leave-active {
    transition: all 0.5s ease-out;
    position: absolute;
    width: 100%;
  }

  .list-leave-to {
    opacity: 0;
  }

  .list-move {
    transition: all 0.5s;
  }
}
</style>
