var app = angular.module('app' , [ 'ngRoute' , 'ngMessages'] );
app.config(function ($routeProvider) {
  $routeProvider
  .when( '/home' , {
    templateUrl : 'home.html',
    controller : 'dshbrdCtrl'
  })
  .when( '/add_question' , {
    templateUrl : 'add_question.html',
    controller : 'questionCtrl'
  })
  .when( '/quiz' , {
    templateUrl : 'quiz.html',
    controller : 'quizCtrl'
  })
  .when( '/logout' , {
    templateUrl : 'logout.html',
    controller : 'logoutCtrl'
  })
  .otherwise({
    redirectTo : '/home'
  });
});
