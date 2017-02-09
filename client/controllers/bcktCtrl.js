app.controller('bcktCtrl' , ['$scope' , 'bcktFctry' , 'usrFctry' , '$location' ,   function( scope , bf , uf , location ) {

    // const idx = function(){
    //   bf.idx( function(dataFromFactory ){
    //           scope.buckets = dataFromFactory;
    //   });
    // };
    //
    // idx();






  const idxLogged = function(){
    scope.thisUsr = {};
    uf.idxLogged( function( logged ){
      scope.thisUsr = logged;
      console.log(logged);
      if( !scope.thisUsr.name ){
        location.url('/dashboard')
        console.log('Sorry');
      };
    });

  };
  idxLogged();

  const idx_U = function(){

  uf.idx( function( dataFromCF ){
    scope.users = dataFromCF
  });
};
  idx_U();


  scope.addBckt = function( newBckt ){
    scope.newBckt.usrId = scope.thisUsr._id;
    console.log(newBckt);
    bf.addBckt( newBckt );
    idx_U();

  };

  scope.doBckt = function( bckt ){
    bf.doBckt( bckt , function( dataFromBF ){
      console.log( ` HERE'S THE NEW TEST THING ${dataFromBF}` );
      console.log(dataFromBF);
    });
    idx_U();
  };


}]);
