app.factory( 'questionFctry' , [ '$http' , function( http ){
  function questionFctry(){
    var _this = this;
    this.newQuestion = function( newQstn , callbackToCtrl ){

      console.log(`Adding new Question, going to backend...`, newQstn);
      http.post( '/add_question' , newQstn ).then( function( res ){
        console.log(`BACK TO QSTNFCTRY`);
        callbackToCtrl( res );
      });
    };

  };


  return new questionFctry();
}]);
