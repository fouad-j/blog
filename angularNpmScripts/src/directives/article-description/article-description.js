app
  .directive('articleDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/article-description/article-description.html',
      controller: 'articleDescriptionController as articleDescCtrl',
      scope: {
        idarticle: '@'
      }
    };
  })
  .controller('articleDescriptionController', function(Articles, $scope) {
    Articles.getArticle($scope.idarticle).then(data => {
      this.article = data;
    });
  });
