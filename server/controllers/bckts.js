console.log('Bckts Ctrl up!');
const mongoose = require('mongoose');
const Bckt = mongoose.model('Bckt');
const User = mongoose.model('User');

function ordrsCtrl(){


  this.add = function( req , res ){
    let ab = {};
    let nb = req.body;
    console.log(nb);
    Bckt.create( { name : nb.name , desc : nb.desc , done : '' } , function( err , data ){
      console.log(`******************************`);
      console.log(nb);
      if( err ){
        console.log(`Error adding new order to DB`);
        console.log(err);
      }else{
        console.log(`DID IT, adding to users...`);
        ab = data;
        User.findOne( { _id : nb.usrId } , function( err , user ){
          if( err ){
            console.log(err.errors);
          }else{
            console.log(ab);
            user.buckets.push( ab );
            console.log(user);
            user.save();
            console.log(`Now adding to User...`);

          };

        });
      };
    });
  };

  this.idx = function( req , res ){
    Bckt.find( {} )
      .populate('_customer')
      .populate('_product')
      .exec(function( err , allOrdrs ){
      if( err ){
        console.log(`Error indexing all orders from db.`);
      }else{
        console.log(`SNATCHED ALL ORDERS FROM DB:`);
        console.log( allOrdrs );
        res.json( allOrdrs )
      };
    });
  };

  this.do = function( req , res ){
    Bckt.findOne( { _id : req.body._id } , function( err , bckt ){
      if( err ){
        console.log(err.errors);
      }else{
        console.log(`Bout to DO it, son!`);
        bckt.done = 'checked';
        console.log(bckt);
        bckt.save();
        res.json( { success : true } )
      };
    });
  };

  this.delete = function( req , res ){
    console.log(req.params);
    let prdctIdToAdj = {};
    let qty = 0;
    Bckt.findOne( { _id : req.params.victimId } , function( err , ordr ){
      if( err ){
        console.log(`Couldn't adjust product inventories`);
      }else{
      console.log(`FOUND THE ONE I WANT TO DELETE`);
      prdctIdToAdj = ordr._product;
      qty = ordr.qty;
      Bckt.remove( { _id : req.params.victimId } , function( err , deletedOrdr ){
          if( err ){
            console.log(`Couldn't delete`);
          }else{
            console.log(`GETTING HERE AFWLKJAFWEL; KAFF ;LKDJS ;ASLDJKF ;ASDLFJK AS;DLFKJ AS;DLFKJ ASD;FLJK AS`);
            // res.json( deletedOrdr );
            res.redirect('/rep_inv/'+prdctIdToAdj+'/'+qty)
          };
        });
      };
    });

  };

};
module.exports = new ordrsCtrl;
