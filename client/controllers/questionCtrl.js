app.controller('questionCtrl' ,  ['$scope' , '$location' , 'questionFctry' , function( scope , location , qf ) {

  // const idxUsrs = function(){
  //   uf.idx( function( allUsrs ){
  //     scope.usrs = allUsrs
  //   });
  //     var sn = prompt( 'Username?' )
  //     console.log(sn);
  // };
  // idxUsrs();


  // scope.usrLogin = function( usr ){
  //   uf.addUsr( usr , function( res ){
  //     location.url('/buckets')
  //   });
  // };

  scope.newQuestion = function( newQstn ){
    console.log("Adding a new question to Factory...",newQstn);
    qf.newQuestion( newQstn , function(res){
      console.log(res);
    } );
  };

}]);
