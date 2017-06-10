<template>
  <div>
    <articleDescription v-for="article in articles"
                        v-bind:content="article"
                        :key="article.idArticle"
                        class="articles-list"></articleDescription>
  </div>
</template>

<script>
  import articleDescription from './ArticleDescription.vue'
  export default {
    name: 'listArticles',
    props: ['articles'],
    components: {
      articleDescription
    }
  }
</script>
