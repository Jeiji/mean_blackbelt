console.log('Bckts Ctrl up!');
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Score = mongoose.model('Score');


function ordrsCtrl(){


  this.add = function( req , res ){
    let aq = {};
    let nq = req.body;
    console.log(nq);
    Question.create( { question : nq.question , answer : nq.answer, wrong1 : nq.wrong1 ,  wrong2: nq.wrong2  } , function( err , data ){
      console.log(`******************************`);
      console.log(nq);
      if( err ){
        console.log(`Error adding new question to DB`);
        console.log(err);
      }else{
        console.log(`DID IT, adding to questions...`);
        aq = data;
        aq.save();
        res.json( data )
      };
    });
  };

  this.add_score = function( req , res ){
    let aq = {};
    let nq = req.body;
    console.log(nq);
    Score.create( { name : nq.name , score : nq.score, percentage : nq.percentage ,  wrong2: nq.wrong2  } , function( err , data ){
      console.log(`******************************`);
      console.log(nq);
      if( err ){
        console.log(`Error adding new question to DB`);
        console.log(err);
      }else{
        console.log(`DID IT, adding to questions...`);
        aq = data;
        aq.save();
        res.json( data )
      };
    });
  };

  this.idx = function( req , res ){
    Question.find( {} )
      .exec(function( err , allQuestions ){
      if( err ){
        console.log(`Error indexing all quesions from db.`);
      }else{
        console.log(`SNATCHED ALL questions FROM DB:`);
        console.log( allQuestions );
        res.json( allQuestions )
      };
    });
  };

  this.idx_scores = function( req , res ){
    Score.find( {} )
      .exec(function( err , allScores ){
      if( err ){
        console.log(`Error indexing all scores from db.`);
      }else{
        console.log(`SNATCHED ALL scores FROM DB:`);
        console.log( allScores );
        res.json( allScores )
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
