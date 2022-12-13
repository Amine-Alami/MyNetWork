<template>
  <div class="row gap-3">
      <div v-if="Object.keys(userStore.user).length !== 0">
          <ArticleForm />
      </div>
      <div v-for="article in articleStore.articles" :key="article.id">
          <Article :article="article"/>
      </div>
  </div>
</template>

<script setup>
  import {useUserStore} from '../stores/userStore';
  import {useArticleStore} from '../stores/articleStore';
  import {getAllArticles} from '../services/articleService';
  import Article from '../components/Article.vue';
  import ArticleForm from '../components/ArticleForm.vue';

  const userStore = useUserStore();
  const articleStore = useArticleStore();
  if (articleStore.articles.length === 0) {
    getAllArticles().then(data => articleStore.articles = data); 
  }
</script>

<style scoped>

</style>