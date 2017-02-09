app.factory( 'bigFactory' , [ '$http' , function( http ){
  function bigFactory(){
    var _this = this;
    this.logged = "";
    this.scoreToShow = {};

    this.idxQuestions = function( callbackToCtrl ){
      http.get( '/get_questions' ).then( function( res ){
        console.log(`BACK TO BigFactory`);
        callbackToCtrl( res );
      });
    }

    this.idxScores = function( callbackToCtrl ){
      http.get( '/get_scores' ).then( function( res ){
        console.log(`BACK TO BigFactory`);
        callbackToCtrl( res );
      });
    }


  this.add_score = function( score,  callbackToCtrl ){
    console.log(score);
    http.post( '/add_score' , score ).then( function( res ){
      console.log(`BACK TO BigFactory after adding new score`);
      callbackToCtrl( res );
    });
  };

  };



  return new bigFactory();
}]);
