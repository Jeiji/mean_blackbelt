console.log(`Routes are up!`);
const usrs = require('../controllers/usrs.js')
const questions = require('../controllers/questions.js')
// const bckts = require('../controllers/bckts.js')
// const bckts = require('../controllers/bckts.js')
module.exports = function( app ){

  // app.get( '/usrs' , function( req , res ){
  //   usrs.idx( req , res );
  // });
  //
  // app.post( '/add_usr' , function( req , res ){
  //   console.log(`TO /ADD_USR ROUTES IN BACKEND`);
  //   console.log(req.body);
  //   usrs.add( req , res );
  // });
  //
  // app.delete( '/del_usr_:victimId' , function( req , res ){
  //   usrs.delete( req , res );
  // });
  //
  // app.post( '/add_bckt' , function( req , res ){
  //   bckts.add( req , res );
  // });
  //
  // app.post( '/do_bckt' , function( req , res ){
  //   bckts.do( req , res );
  // });
  //
  //
  // app.get( '/bckts' , function( req , res ){
  //   console.log(`TO / ROUTES IN BACKEND`);
  //   bckts.idx( req , res );
  // });
  //
  // app.delete( '/del_bckt_:victimId' , function( req , res ){
  //   bckts.delete( req , res );
  // });

  app.post( '/add_question' , function( req , res ){
    console.log(`TO /ADD_QUESTION ROUTES IN BACKEND`);
    console.log(req.body);
    questions.add( req , res );
  });

  app.get( '/get_questions' , function( req , res ){
    console.log(`TO get questions ROUTES IN BACKEND`);
    console.log(req.body);
    questions.idx( req , res );
  });

  app.get( '/get_scores' , function( req , res ){
    console.log(`TO get scores ROUTES IN BACKEND`);
    console.log(req.body);
    questions.idx_scores( req , res );
  });

  app.post( '/add_score' , function( req , res ){
    console.log(`TO /ADD_SCORE ROUTES IN BACKEND`);
    console.log(req.body);
    questions.add_score( req , res );
  });

};
