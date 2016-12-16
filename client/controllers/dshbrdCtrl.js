app.controller('dshbrdCtrl' , ['$scope' , '$location' , 'bcktFctry' , 'prdctFctry' , 'usrFctry' ,  function( scope , location , of , pf , uf ) {

  const idxUsrs = function(){
    uf.idx( function( allUsrs ){
      scope.usrs = allUsrs
    });
  };
  idxUsrs();


  scope.usrLogin = function( usr ){
    uf.addUsr( usr , function( res ){
      location.url('/buckets')
    });
  };

}]);
