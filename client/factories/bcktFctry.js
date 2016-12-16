app.factory( 'bcktFctry' , [ '$http' , function( http ){
  orders = [];
  order = {};
  function ordrFctry(){
    var _this = this;

    this.idx = function( callbackToCtrl ){
      let dbOrders = [];
      http.get( '/ordrs' ).then( function( res ){
        dbOrders = res.data;
        orders = dbOrders
        callbackToCtrl( dbOrders );
      });
    };

    this.addBckt = function( newBckt ){

      http.post( '/add_bckt' , newBckt ).then( function( res ){
        console.log(res);
      });
    };

    this.delOrdr = function( victimId , callbackToCtrl ){
      http.delete( '/del_ordr_' + victimId ).then( function( deletedOrdr ){
        callbackToCtrl( deletedOrdr )
      });
    };

    this.doBckt = function( bckt , callbackToCtrl ){
      http.post( '/do_bckt' , bckt ).then( function( res ){
        callbackToCtrl( res )
      } ) ;

    };


  };
  return new ordrFctry();
}]);
