<template>
  <div>
    <h1 class="page-header">Articles List<small> 5 latest articles</small></h1>

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
    $mounted () {
      console.log('sint.', this.$route.params.keyword)
      articleSerice.search(this.$route.params.keyword).then(arts => {
        this.articles = arts
      })
    },
    components: {
      listArticles
    }
  }
</script>
