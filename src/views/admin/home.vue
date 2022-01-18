<script setup lang="ts">
import { nextTick, ref } from 'vue'
import * as echarts from 'echarts'
import { echarts1, echarts2 } from './echarts'
nextTick(() => {
  echarts.init(document.querySelector('#echarts1')!).setOption(echarts1)
  echarts.init(document.querySelector('#echarts2')!).setOption(echarts2)
})
interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}
const cards = ref<ICard[]>([
  { title: '总人数', price: 238882, icon: 'fas fa-address-card', iconColor: 'text-violet-700', totalTitle: '总人数', total: 887821312 },
  { title: '销售额', price: 8999123, icon: 'fab fa-affiliatetheme', iconColor: 'text-green-700', totalTitle: '总销售额', total: 9991220222 },
  { title: '订单数', price: 1500, icon: 'fab fa-airbnb', iconColor: 'text-blue-700', totalTitle: ' 总订单数', total: 3390 },
  { title: '评论数', price: 4324230, icon: 'fab fa-alipay', iconColor: 'text-red-700', totalTitle: '总评论数', total: 6589022 },
])
</script>

<template>
  <div>
    <div class="md:grid grid-cols-4 gap-3">
      <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(card, index) in cards" :key="index" class="mb-2">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-gray-700">{{ card.title }}</span>
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>
        <section class="flex justify-between items-center mt-5">
          <span class="text-3xl">{{ card.price }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-white p-1 text-4xl"></i>
        </section>
        <section class="flex justify-between items-center mt-5">
          <span class="text-gray-700">{{ card.totalTitle }}</span>
          <span>{{ card.total }}</span>
        </section>
      </el-card>
    </div>
    <div class="md:grid grid-cols-2 gap-3 mt-5">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>人数据统计</div>
        </template>
        <div id="echarts1" class="h-72 w-full"></div>
      </el-card>
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>销售额度</div>
        </template>
        <div id="echarts2" class="h-72 w-full"></div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
