<script setup lang="ts">
import articleApi from '@/apis/articleApi';
const articles = ref();
articleApi.getArticles().then(({ data }) => (articles.value = data));

const remove = (index: number) => {
  articles.value.splice(index, 1);
};
</script>

<template>
  <div class="article">
    <AnimateList tag="ul">
      <li :data-index="index" v-for="(article, index) of articles" :key="article.id" @click="remove(index)">
        {{ article.title }}
      </li>
    </AnimateList>
  </div>
</template>

<style scoped lang="scss">
.article {
  padding: 30px;
  background-color: #34495e;
  height: 100vh;
  ul {
    li {
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: #9b59b6;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      color: white;
      cursor: pointer;
    }
  }
}
</style>
