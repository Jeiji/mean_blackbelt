console.log(`Buckets Controller up!`);

const mongoose = require('mongoose');
const Bucket = mongoose.model( 'Bucket' )

function bcktsCtrl(){


  this.idx = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR IDX`);
    Bucket.find( {} , function( err , allBckts ){
      if( err ){
        console.log(`Error indexing all buckets from db.`);
      }else{
        console.log(`SNATCHED ALL CUSTOMERS FROM DB:`);
        console.log( allBckts );
        res.json( allBckts )
      };
    });
  };

  this.add = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR ADD`);
    let newBckt = req.body
    Bucket.create( newBckt , function( err , addedBckt ){
      if( err ){
        console.log(`Error adding new bucket to db.`);
      }else{
        console.log(`ADDED CSTOMER TO DB!`);
        res.json( addedBckt );
      };
    });
  };

  this.delete = function( req , res ){
    console.log(req.params);
    Bucket.remove( { _id : req.params.victimId } , function( err , deletedBckt ){
      if( err ){
        console.log(`Couldn't delete`);
      }else{
        res.json( deletedBckt );
      };
    });
  };

  this.adj_inv = function( req , res ){
    Bucket.findOne( { _id : req.params.bcktId } , function( err , bckt ){
      if( err ){
        console.log(`Sowee, couldn't edit the inv of the bckt`);
      }else{
        console.log(req.params);
      bckt.qty -= req.params.qty;
      bckt.save();
      console.log(`Updated inv!`);
      console.log(bckt);
      };
    });
  };

  this.rep_inv = function( req , res ){
    Bucket.findOne( { _id : req.params.bcktId } , function( err , bckt ){
      console.log(req.params.bcktId);
      if( err ){
        console.log(`Couldn't adjust inventory...`);
      }else{
      console.log(`About to adjust inventory`);
      console.log(bckt.qty);
      bckt.qty += parseInt(req.params.qty);
      bckt.save();
      };
    });
  };

};
module.exports = new bcktsCtrl
