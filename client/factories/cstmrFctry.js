app.factory( 'cstmrFctry' , [ '$http' , function( http ){
  customers = [
    { name : 'Gordo' }
  ];


  customer = {};
  function cstmrFctry(){
    var _this = this;

    this.idx = function( callbackToCtrl ){
      let dbCustomers = [];
      console.log(`TO CSTMRFCTRY FOR INDEX`);
      http.get( '/cstmrs' ).then( function( res ){
        console.log(`BACK TO CSTMRFCTRY FROM SERVER FOR INDEX`);
        dbCustomers = res.data;
        customers = dbCustomers
        console.log(`ALMOST`);
        callbackToCtrl( dbCustomers );
      });
    };

    this.addCstmr = function( newCstmr , callbackToCtrl ){

      console.log(`TO CSTMRFCTRY FOR ADDCSTMR`);
      http.post( '/add_cstmr' , newCstmr ).then( function( res ){
        console.log(`BACK TO CSTMRFCTRY`);
        callbackToCtrl( res );
      });
    };

    this.delCstmr = function( victimId , callbackToCtrl ){
      http.delete( '/del_cstmr_' + victimId ).then( function( deletedCstmr ){
        callbackToCtrl( deletedCstmr )
      });
    };

  };
  return new cstmrFctry();
}]);
