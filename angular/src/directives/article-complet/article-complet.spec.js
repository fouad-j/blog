describe('Should test Directive ArticleComplet', () => {
  let Articles;
  let $scope;
  let articleCompletCtrl;
  let el;

  beforeEach(angular.mock.module('app'));

  let article = {
    title: 'title article',
    content: 'content article'
  };

  beforeEach(angular.mock.inject((_Articles_, $controller, $rootScope, $q, $compile) => {
    Articles = _Articles_;
    $scope = $rootScope.$new();

    spyOn(Articles, 'getArticle').and.callFake(articleId => $q.when(article));

    articleCompletCtrl = $controller('articleCompletController', {Article: Articles, $scope: $scope});

    el = angular.element('<article-complet idarticle="123456"></article-complet>');
    $compile(el)($scope);
    $rootScope.$digest();

    // el.controller('articleCompletController');
    // $scope = el.isolateScope() || el.scope();
  }));

  it('Should get complet article by id', () => {
    expect(articleCompletCtrl.article).toEqual(article);
  });
});
