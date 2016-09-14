app
  .directive('categoriesMenu', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/categories/categories.html',
      controller: 'categoriesController as categoriesCtrl'
    };
  })
  .controller('categoriesController', function(Categories) {
    Categories.getCategories().then(data => {
      this.categories = data;
    });
  });
