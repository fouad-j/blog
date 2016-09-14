app
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeViewController as homeViewCtrl',
        params: {numPage: '1', itemPage: '5'}
      })
      .state('homePagination', {
        url: '/home/numPage/:numPage/nbItem/:itemPage',
        templateUrl: 'views/home/home.html',
        controller: 'homeViewController as homeViewCtrl',
        params: {numPage: '1', itemPage: '5'}
      });
  })
  .controller('homeViewController', function(Articles, $stateParams) {
    this.pagination = {
      count: Articles.countArticles().then(data => {
        this.pagination.count = parseInt(data, 10);
        this.pagination.nbPage = Math.ceil(this.pagination.count / this.pagination.itemByPage);
      }),
      numPage: $stateParams.numPage,
      itemByPage: $stateParams.itemPage
    };

    this.range = function() {
      let min = 1;
      let max = this.pagination.nbPage;
      var input = [];
      for (var i = min; i <= max; i++) {
        input.push(i);
      }
      return input;
    };

    this.articles = Articles.getArticles(this.pagination.numPage, this.pagination.itemByPage);
  });
