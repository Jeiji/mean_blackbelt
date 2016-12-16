app.factory( 'prdctFctry' , [ '$http' , function( http ){
  products = [
    { name : 'Gordo' }
  ];
  product = {};
  function prdctFctry(){
    var _this = this;

    this.idx = function( callbackToCtrl ){
      let dbProducts = [];
      http.get( '/prdcts' ).then( function( res ){
        dbProducts = res.data;
        products = dbProducts
        callbackToCtrl( dbProducts );
      });
    };

    this.addPrdct = function( newPrdct , callbackToCtrl ){
      http.post( '/add_prdct' , newPrdct ).then( function( res ){
        callbackToCtrl( res );
      });
    };

    this.delPrdct = function( victimId , callbackToCtrl ){
      http.delete( '/del_prdct_' + victimId ).then( function( deletedPrdct ){
        callbackToCtrl( deletedPrdct )
      });
    };

  };
  return new prdctFctry();
}]);
