app
  .config(function($stateProvider) {
    $stateProvider.state('article', {
      url: '/article/:articleId',
      templateUrl: 'views/article/article.html',
      controller: 'articleViewController as articleViewCtrl'
    });
  })
  .controller('articleViewController', function($stateParams) {
    this.articleId = $stateParams.articleId;
  });
