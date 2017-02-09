console.log(`Loading question.js model...`);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

BcktSchema = new mongoose.Schema(
  {
    question : { type : String , minlength : 1 , required : true },
    answer : { type : String , minlength : 1 ,  required : true },
    wrong1 : { type : String , minlength : 1 ,  required : true },
    wrong2 : { type : String , minlength : 1 ,  required : true },
  } ,
  { timestamps : true });
const Bckt = mongoose.model( 'Question' , BcktSchema )
