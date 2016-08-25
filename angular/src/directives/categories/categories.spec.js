describe('Should test Directive Categories', () => {
  let $scope;
  let el;
  let categoriesMenu;
  let Categories;

  let categories = ['cat1', 'cat2', 'cat3'];

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $controller, _Categories_, $q) => {
    Categories = _Categories_;
    spyOn(Categories, 'getCategories').and.callFake(() => $q.when(categories));

    $scope = $rootScope.$new();
    categoriesMenu = $controller('categoriesController', {Categories: Categories});

    el = angular.element('<div categories-menu></div>');
    $compile(el)($scope);
    $rootScope.$digest();
  }));

  it('Should call search page with keyword to search', () => {
    expect(categoriesMenu.categories).toEqual(categories);
  });
});
