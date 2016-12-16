app.controller('usrCtrl' , ['$scope' , 'usrFctry' , 'bcktFctry' ,  function( scope , cf , of ) {

  const idx_O = function(){
    of.idx( function( dataFromOF ){
      scope.orders = dataFromOF
    });
  };
  idx_O();
    scope.errors = [];

    console.log(`IN CSTMRCTRL!`);
    let idx = function(){
    cf.idx( function( dataFromFactory ){
      console.log(`BACK TO CSTMRCTRL FROM FACTORY`);
      scope.customers = dataFromFactory
    });
  };
  idx();

  scope.addCstmr = function( newCstmr ){
    scope.errors=[];
    console.log(newCstmr);
    if( newCstmr.name ){
      if( newCstmr.name.length < 4 ){
        scope.errors.push( { e : 'short' } )
        return;
      };
      if( newCstmr.name.length > 10 ){
        scope.errors.push( { e : 'long' } )
        return;
      };
    };
    scope.errors=[];
    console.log(`TO CSTMRCTRL FOR ADDCSTMR`);
    cf.addCstmr( newCstmr , function( dataFromFactory ){
      console.log(`BACK TO THE CSTMRCTRL FOR ADDCSTMR`);
    });
    scope.newCstmr = {};
    idx();
  };

  scope.delCstmr = function( victimId ){
    cf.delCstmr( victimId , function( dataFromFactory ){
      console.log(dataFromFactory);
    });
    for( i = 0 ; i <= scope.orders.length-1 ; i++  ){
      if( scope.orders[i]._customer._id == victimId ){
        of.delOrdr( scope.orders[i]._id , function( dataFromFactory ){
          console.log(`Order is gone, too!`);
        });
      };
    };
    idx();
  };

}]);
