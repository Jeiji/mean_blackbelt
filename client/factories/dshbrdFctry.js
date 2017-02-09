app.factory( 'usrFctry' , [ '$http' , function( http ){
  user = {};
  function usrFctry(){
    var _this = this;
    users = [
    { name : 'Gordon' , buckets : [] }
  ];

  this.idx = function( callbackToCtrl ){
    let dbUsers = [];
    http.get( '/usrs' ).then( function( res ){
      dbUsers = res.data;
      users = dbUsers
      callbackToCtrl( dbUsers );
    });
  };

  this.addUsr = function( newUsr , callbackToCtrl ){

    console.log(`Adding`);
    http.post( '/add_usr' , newUsr ).then( function( res ){
      console.log(`BACK TO IUSRFCTRY`);
      callbackToCtrl( res );
    });
  };


};
  return new usrFctry();
}]);
