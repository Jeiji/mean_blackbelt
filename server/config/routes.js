console.log(`Routes are up!`);
const usrs = require('../controllers/usrs.js')
// const bckts = require('../controllers/bckts.js')
const bckts = require('../controllers/bckts.js')
module.exports = function( app ){

  app.get( '/usrs' , function( req , res ){
    usrs.idx( req , res );
  });

  app.post( '/add_usr' , function( req , res ){
    console.log(`TO /ADD_USR ROUTES IN BACKEND`);
    console.log(req.body);
    usrs.add( req , res );
  });

  app.delete( '/del_usr_:victimId' , function( req , res ){
    usrs.delete( req , res );
  });

  // app.get( '/bckts' , function( req , res ){
  //   console.log(`TO / ROUTES IN BACKEND`);
  //   bckts.idx( req , res );
  // });
  //
  // app.get( '/dec_bckt_inv_:bcktId/:qty' , function( req , res ){
  //   bckts.adj_inv( req , res );
  // });
  //
  // app.delete( '/rep_inv/:bcktId/:qty' , function( req , res ){
  //   bckts.rep_inv( req , res );
  // });
  //
  // app.post( '/add_bckt' , function( req , res ){
  //   console.log(`TO /ADD_CSTMR ROUTES IN BACKEND`);
  //   console.log(req.body);
  //   bckts.add( req , res );
  // });
  //
  // app.delete( '/del_bckt_:victimId' , function( req , res ){
  //   bckts.delete( req , res );
  // });

  app.post( '/add_bckt' , function( req , res ){
    console.log(`\nAdding bucket:`,req.body);
    bckts.add( req , res );
  });

  app.post( '/do_bckt' , function( req , res ){
    bckts.do( req , res );
  });


  app.get( '/bckts' , function( req , res ){
    console.log(`TO / ROUTES IN BACKEND`);
    bckts.idx( req , res );
  });

  app.delete( '/del_bckt_:victimId' , function( req , res ){
    bckts.delete( req , res );
  });


};
