<template>
  <div>
    <h1 class="page-header">Articles List<small> 5 latest articles</small></h1>

    <listArticles v-bind:articles="articles"></listArticles>

    <!--<ul class="pagination">-->
      <!--<li ng-repeat="n in homeViewCtrl.range()" ng-class="{ 'active': homeViewCtrl.pagination.numPage == n }">-->
        <!--<a ui-sref="homePagination({ numPage: n, itemPage: homeViewCtrl.pagination.itemByPage })">{{n}}</a>-->
      <!--</li>-->
    <!--</ul>-->
  </div>

</template>

<script>
  import articleSerice from '../services/articles'
  import listArticles from '../components/ListArticles.vue'
  export default {
    name: 'home',
    data: () => ({
      articles: []
    }),
    created () {
      articleSerice.getArticles().then(arts => {
        this.articles = arts
      })
    },
    components: {
      listArticles
    }
  }
</script>
