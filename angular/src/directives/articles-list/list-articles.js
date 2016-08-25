app
  .directive('listArticles', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/articles-list/list-articles.html',
      controller: 'listArticlesController as listArticlesCtrl',
      scope: {articleslist: '&articleslist'},
      link: (scope, element, attrs, listArticlesController) => {
        scope.articleslist().then(data => {
          listArticlesController.articles = data;
        });
      }
    };
  })
  .controller('listArticlesController', function() {
  });
