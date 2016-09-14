describe('Should test Directive Search', () => {
  let $scope;
  let el;
  let $state;
  let searchMenu;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $controller, _$state_) => {
    $state = _$state_;
    spyOn($state, 'go').and.callFake((state, params) => {});

    $scope = $rootScope.$new();
    $scope.search = 'toSearch';
    searchMenu = $controller('searchController', {$scope: $scope, $state: $state});

    el = angular.element('<div search-menu></div>');
    $compile(el)($scope);
    $rootScope.$digest();
  }));

  it('Should call search page with keyword to search', () => {
    searchMenu.submitSearchForm();
    expect($state.go).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('search', {keyword: 'toSearch'});
  });
});
