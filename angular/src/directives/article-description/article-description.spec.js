describe('Should test Directive ArticleDescription', () => {
  let articleDescriptionCtrl;
  let Articles;
  let $scope;
  let el;

  let article = {
    title: 'title article',
    content: 'content article'
  };

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(($compile, _Articles_, $rootScope, $controller, $q) => {
    Articles = _Articles_;
    $scope = $rootScope.$new();

    spyOn(Articles, 'getArticle').and.callFake(articleId => $q.when(article));
    articleDescriptionCtrl = $controller('articleDescriptionController', {Article: Articles, $scope: $scope});

    el = angular.element('<article-complet idarticle="123456"></article-complet>');
    $compile(el)($scope);
    $rootScope.$digest();

    el.controller('articleDescriptionController');
    $scope = el.isolateScope() || el.scope();
  }));

  it('Should get descption article by id', () => {
    expect(articleDescriptionCtrl.article).toEqual(article);
  });
});
