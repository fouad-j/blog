<template>
  <div class="well">
    <form name="form_search" novalidate>
      <h4>Blog Search</h4>
      <div class="input-group">
        <input type="text" class="form-control" name="keyword" minlength="3" v-model="keyword" required>
        <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="onClickSearch">
                    <span class="glyphicon glyphicon-search"></span>
                </button>
            </span>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'search',
    methods: {
      onClickSearch () {
        this.$router.push({name: 'Search', params: { keyword: this.keyword }})
      }
    },
    data: () => ({
      keyword: ''
    })
  }
</script>
