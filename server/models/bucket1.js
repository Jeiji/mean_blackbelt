console.log(`Loading bucket.js model...`);
const mongoose = require('mongoose');

BucketSchema = new mongoose.Schema(
  {
    name : { type : String , required : true , minlength : 3 },
    desc : { type : String , required : true , minlength : 3 },
    checked : { type : String },
  } ,
  { timestamps : true });
const Bucket = mongoose.model( 'Bucket' , BucketSchema )
