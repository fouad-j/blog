<template>
  <div id="app">
    <blogHeader></blogHeader>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <div class="col-md-4">
          <search></search>
          <categories></categories>
        </div>
      </div>

      <hr>
      <blogFooter></blogFooter>
    </div>
  </div>
</template>

<script>
import blogFooter from './components/Footer.vue'
import blogHeader from './components/Header.vue'
import search from './components/Search.vue'
import categories from './components/Categories.vue'
export default {
  name: 'app',
  components: {
    blogFooter, blogHeader, search, categories
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
