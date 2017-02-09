console.log(`Loading score.js model...`);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ScoreSchema = new mongoose.Schema(
  {
    name : { type : String , minlength : 1 , required : true },
    score : { type : String , minlength : 1 ,  required : true },
    percentage : { type : Number , minlength : 1 ,  required : true },
  } ,
  { timestamps : true });
const Score = mongoose.model( 'Score' , ScoreSchema )
