app.controller('logoutCtrl' ,  ['$scope' , '$location' , 'bigFactory' , function( scope , location , bf ) {

  const idxQuestions = function(){
    console.log("loggin tou");

     bf.logged = "";
     location.url('/home')``
  };
  idxQuestions();

}]);
