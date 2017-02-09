app.controller('dshbrdCtrl' , ['$scope' , '$location', 'bigFactory' ,  function( scope , location , bf ) {

  scope.scores = [];

  const loadUp = function(){
    if( !bf.logged ){
      var sn = prompt( 'Username?' )
      console.log(sn);
      bf.logged = sn
    }

    if( bf.scoreToShow ){
      scope.scoreToShow = bf.scoreToShow
    }

    bf.idxScores( function( data ){
        console.log("THE DATA'S BACK",data);
        scope.scores = data.data
    })
  };
  loadUp();


}]);
