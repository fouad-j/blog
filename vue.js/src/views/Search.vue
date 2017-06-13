<template>
  <div>
    <h1 class="page-header">Articles List<small> 5 latest articles</small></h1>
    {{articles}}
    <listArticles v-bind:articles="articles"></listArticles>

  </div>

</template>

<script>
  import articleSerice from '../services/articles'
  import listArticles from '../components/ListArticles.vue'
  export default {
    name: 'search',
    data: () => ({
      articles: []
    }),
    watch: {
      '$route.params.keyword': function (keyword) {
        articleSerice.search(keyword).then(articles => {
          this.articles = articles
        })
      }
    },
    $mounted () {
      articleSerice.search(this.$route.params.keyword).then(articles => {
        this.articles = articles
      })
    },
    components: {
      listArticles
    }
  }
</script>
