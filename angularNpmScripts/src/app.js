let app = angular.module('app', ['ui.router']);

app
  .constant('URL_BACKEND', 'http://localhost:3000')
  .config(function($urlRouterProvider) {
    // For any unmatched url
    $urlRouterProvider.otherwise('home');
  });
