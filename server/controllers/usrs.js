console.log(`Users Controller up!`);

const mongoose = require('mongoose');
const User = mongoose.model( 'User' )

function usrsCtrl(){


  this.idx = function( req , res ){
    User.find( {} )
    .populate('buckets')
    .exec( function( err , allUsrs ){
     if( err ){
       console.log(`Error indexing all users from db.`);
     }else{
       console.log( allUsrs );
       res.json( allUsrs )
     };
   });

  };

  this.add = function( req , res ){
    let newUsr = req.body
    User.findOne( { name : newUsr.name } , function( err , data ){
      if( data ){
        console.log(`FOUND HIM`);
        console.log(data);
        res.json( data )
      }else{
        User.create( newUsr , function( err , addedUsr ){
          if( err ){
            console.log(`Error adding new user to db.`);
          }else{
            console.log(`ADDED USR TO DB!`);
            console.log( addedUsr );
            res.json( addedUsr );
          };
        });
      };
    });

  };

  this.delete = function( req , res ){
    console.log(req.params);
    User.remove( { _id : req.params.victimId } , function( err , deletedUsr ){
      if( err ){
        console.log(`Couldn't delete`);
      }else{
        res.json( deletedUsr );
      };
    });
  };

};
module.exports = new usrsCtrl
