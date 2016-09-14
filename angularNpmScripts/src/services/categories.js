app.factory('Categories', ($q, $http) => {
  let factory = {};

  let categories = [];

  factory.getCategories = () => {
    return $http.get(`http://localhost:3000/query/rest/categories`).then(reponse => {
      categories = reponse.data;
      return categories;
    });
  };

  factory.getCategorie = categorieTag => {
    return $http.get(`http://localhost:3000/query/rest/categorie/${categorieTag}`).then(reponse => reponse.data);
  };

  return factory;
});
