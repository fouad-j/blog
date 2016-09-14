app
  .config(function($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'views/contact/contact.html',
      controller: 'contactViewController as contactViewCtrl'
    });
  })
  .controller('contactViewController', function() {

  });
