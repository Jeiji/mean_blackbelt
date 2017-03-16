//---------------- SETUP -------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session')



const app = express();

// app.use( bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());

//---------------- STATIC FILES -------------------
app.use( express.static( path.join( __dirname , './client')));
app.use( express.static( path.join( __dirname , './client/partials')));
app.use( express.static( path.join( __dirname , './bower_components')));

//---------------- SESSIONS -------------------
app.use(session({
  secret: 'mekele',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/', function(req, res, next) {
  var sesh = req.session
  if (sesh.views) {
    sesh.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + sesh.views + '</p>')
    res.write('<p>expires in: ' + (sesh.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    sess.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

//---------------- DATABASE -------------------
require('./server/config/mongoose.js');

//---------------- ROUTES -------------------
require("./server/config/routes.js")(app);

//---------------- SERVER LISTENER -------------------
const port = 8000;
app.listen( port , function(){
  console.log(`Listening to port ${port} for 'Bucket List'`);
});
