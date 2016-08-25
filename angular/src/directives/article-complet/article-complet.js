app
  .directive('articleComplet', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/article-complet/article-complet.html',
      controller: 'articleCompletController as articleCompletCtrl',
      scope: {
        idarticle: '@'
      }
    };
  })
  .controller('articleCompletController', function(Articles, $scope) {
    Articles.getArticle($scope.idarticle).then(data => {
      this.article = data;
    });
  });
