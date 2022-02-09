<script setup lang="ts">
import { nextTick } from 'process'
import { ref } from 'vue-demi'
const activeName = ref('system')
const isShow = ref(false)
nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    isShow.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="far fa-envelope cursor-pointer" @click.stop="isShow = !isShow"></i>
    <div class="lists" v-show="isShow" @click.stop>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="系统消息" name="system">
          <a href="#"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor nisi, dolores ipsam cum eius debitis,
            nihil dicta harum placeat necessitatibus quae, deleniti quia eaque architecto id aut magnam natus. Incidunt
            cumque ullam cum vitae culpa qui veritatis expedita, explicabo quo rem sunt enim nobis totam ratione
            doloribus magni? Non?</a
          >
          <a href="#"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor nisi, dolores ipsam cum eius debitis,
            nihil dicta harum placeat necessitatibus quae, deleniti quia eaque architecto id aut magnam natus. Incidunt
            cumque ullam cum vitae culpa qui veritatis expedita, explicabo quo rem sunt enim nobis totam ratione
            doloribus magni? Non?</a
          >
          <a href="#"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor nisi, dolores ipsam cum eius debitis,
            nihil dicta harum placeat necessitatibus quae, deleniti quia eaque architecto id aut magnam natus. Incidunt
            cumque ullam cum vitae culpa qui veritatis expedita, explicabo quo rem sunt enim nobis totam ratione
            doloribus magni? Non?</a
          >
        </el-tab-pane>
        <el-tab-pane label="站内消息" name="message">Config</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply px-5 pt-2 pb-5 border rounded-md shadow-md absolute right-[-80px] md:right-[-30px] z-10 bg-white w-[300px] text-sm;
    a {
      @apply truncate block mt-2 border-b pb-1 hover:text-violet-700 duration-200;
    }
  }
}
</style>
