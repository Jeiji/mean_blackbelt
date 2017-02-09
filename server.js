//---------------- SETUP -------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

// app.use( bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());

//---------------- STATIC FILES -------------------
app.use( express.static( path.join( __dirname , './client')));
app.use( express.static( path.join( __dirname , './client/partials')));
app.use( express.static( path.join( __dirname , './bower_components')));


//---------------- DATABASE -------------------
require('./server/config/mongoose.js');

//---------------- ROUTES -------------------
require("./server/config/routes.js")(app);

//---------------- SERVER LISTENER -------------------
const port = 9000;
app.listen( port , function(){
  console.log(`Listening to port ${port} for 'MEAN Blackbelt 3'`);
});
