<template>
  <div class="well">
    <h4>Blog Categories</h4>
    <div class="row">
      <div class="col-lg-6">
        <ul class="list-unstyled">
          <li ng-repeat="categorie in categoriesCtrl.categories" ng-if="$even">
            <a ui-sref="categories({tag: categorie})"></a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul class="list-unstyled">
          <li ng-repeat="categorie in categoriesCtrl.categories" ng-if="$odd">
            <a ui-sref="categories({tag: categorie})"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'categories',
    data: () => ({})
  }
</script>
