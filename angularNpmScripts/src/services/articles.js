app.factory('Articles', ($q, $http, $state) => {
  let factory = {};

  let articles = [];

  factory.getArticles = (numPage = 0, itemByPage = 10) => {
    return $http.get(`http://localhost:3000/query/rest/articles/numPage/${numPage}/nbItem/${itemByPage}`).then(reponse => {
      articles = reponse.data;
      return articles;
    });
  };

  factory.getArticle = articleId => {
    let defer = $q.defer();
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].articleId === articleId) {
        defer.resolve(articles[i]);
        return defer.promise;
      }
    }

    return $http.get(`http://localhost:3000/query/rest/article/${articleId}`).then(
      reponse => reponse.data,
      $state.go('404')
    );
  };

  factory.saveArticle = article => {
    return $http.post(`http://localhost:3000/command/rest/article/`, article).then(reponse => {
      return reponse.data;
    });
  };

  factory.countArticles = () => {
    return $http.get(`http://localhost:3000/query/rest/articles/count`).then(reponse => reponse.data);
  };

  factory.search = keyword => {
    return $http.get(`http://localhost:3000/query/rest/articles/search/${keyword}`).then(reponse => {
      articles = reponse.data;
      return articles;
    });
  };

  return factory;
});
