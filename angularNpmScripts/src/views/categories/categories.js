app
  .config(function($stateProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories/:tag',
        templateUrl: 'views/categories/categories.html',
        controller: 'categoriesViewController as categoriesViewCtrl'
      });
  })
  .controller('categoriesViewController', function(Categories, $stateParams) {
    this.categorieTagName = $stateParams.tag;
    this.articles = Categories.getCategorie(this.categorieTagName);
  });
