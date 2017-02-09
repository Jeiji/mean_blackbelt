app.controller('quizCtrl' , ['$scope' , '$location' , 'bigFactory' , function( scope , location , bf ) {

  // const idxUsrs = function(){
  //   uf.idx( function( allUsrs ){
  //     scope.usrs = allUsrs
  //   });
  //     var sn = prompt( 'Username?' )
  //     console.log(sn);
  // };
  // idxUsrs();


  // scope.usrLogin = function( usr ){
  //   uf.addUsr( usr , function( res ){
  //     location.url('/buckets')
  //   });
  // };

  scope.questions = [
    {
      question:"What is the thing you wanted?",
      answer:"A ball",
      wrong1:"Nooope",
      wrong2:"WWOOOOW"
    },
    {
      question:"What iwfwefasdfasdfed?",
      answer:"A asdfasdfasdfaef",
      wrong1:"fewewwewf",
      wrong2:"feefefef"
    },
    {
      question:"asdfawefjasd;fasjd;fasdf?",
      answer:"A 2322323aef",
      wrong1:"23233223",
      wrong2:"23322332"
    },
    {
      question:"asdf2t490u24t0u92t3490udf?",
      answer:"A sdad",
      wrong1:"23233223",
      wrong2:"23322332"
    },
    {
      question:"2323rr23r23r23?",
      answer:"A sdad",
      wrong1:"23233223",
      wrong2:"23322332"
    },
  ];

  scope.thisTest = [];
  scope.answerSheet = [];
  scope.answers = [];
  var totalScore = 0;
  var percentage = 0;

  const idxQuestions = function(){
    console.log("hi");
    bf.idxQuestions( function( allQuestions ){
      console.log(allQuestions);
      for( i = 0 ; scope.thisTest.length < 3 ; i++ ){
          scope.thisTest.push( allQuestions.data[(Math.ceil(Math.random() * ((allQuestions.data.length-1) - 0) + 0))] )
      }
      if ( thisTest.length < 3 ) {
        while( thisTest.length < 3 ){
          scope.thisTest.push( scope.questions[(Math.ceil(Math.random() * ((scope.questions.length-1) - 0) + 0))] )
        }
      }
      console.log(scope.thisTest);
      console.log(scope.questions);
    } )
  };
  idxQuestions();

  scope.newScore = function(){
    console.log("all ansers",scope.answers);
    totalScore = scope.thisTest.length;
    var thisScore = totalScore;
    for( i = 0 ; i < scope.thisTest.length ; i++ ){
      if ( scope.thisTest[i].answer !== scope.answers[i].answer){
        thisScore--
        console.log(thisScore);
      };
    };
    percentage = (thisScore/totalScore)*100;
    console.log(percentage);

    var newScore = {
      "name" : bf.logged,
      "score" : thisScore + "/" + totalScore,
      "percentage" : percentage
    };
    bf.scoreToShow = newScore
    console.log(newScore);
    bf.add_score( newScore, function(){
      console.log("back");
      location.url('/home')
    });



  };

}]);
