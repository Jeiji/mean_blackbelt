console.log(`Loading customer.js model...`);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
UserSchema = new mongoose.Schema(
  {
    name : { type : String , required : true , minlength : 3 },
    buckets : [{ type : Schema.Types.ObjectId, ref: 'Bckt' }],
  } ,
  { timestamps : true });
const User = mongoose.model( 'User' , UserSchema )
