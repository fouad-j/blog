app
  .config(function($stateProvider) {
    $stateProvider.state('search', {
      url: '/search/:keyword',
      templateUrl: 'views/search/search.html',
      controller: 'searchViewController as searchViewCtrl'
    });
  })
  .controller('searchViewController', function($stateParams, Articles) {
    if ($stateParams.keyword) {
      this.keyword = $stateParams.keyword;
      this.articles = Articles.search($stateParams.keyword);
    }
  });
