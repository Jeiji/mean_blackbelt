app.controller('bcktCtrl' , ['$scope' , 'bcktFctry' , function( scope , pf ) {

    let idx = function(){
    pf.idx( function( dataFromFactory ){
      scope.products = dataFromFactory
    });
  };
  idx();

  scope.addBckt = function( newBckt ){
    pf.addBckt( newBckt , function( dataFromFactory ){
    });
    scope.newBckt = {};
    idx();
  };

  scope.delBckt = function( victimId ){
    pf.delBckt( victimId , function( dataFromFactory ){
      console.log(dataFromFactory);
    });
    idx();
  };

}]);
