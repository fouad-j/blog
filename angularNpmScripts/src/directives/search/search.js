app
  .directive('searchMenu', function() {
    return {
      restrict: 'A',
      templateUrl: 'directives/search/search.html',
      controller: 'searchController as searchCtrl'
    };
  })
  .controller('searchController', function($scope, $state) {
    this.submitSearchForm = () => {
      $state.go('search', {keyword: $scope.search});
    };
  });
