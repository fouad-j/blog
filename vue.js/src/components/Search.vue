<template>
  <div class="well">
    <form name="form_search" novalidate>
      <h4>Blog Search</h4>
      <div class="input-group">
        <input type="text" class="form-control" name="search" minlength="3" required>
        <span class="input-group-btn">
                <button class="btn btn-default" type="submit">
                    <span class="glyphicon glyphicon-search"></span>
                </button>
            </span>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
