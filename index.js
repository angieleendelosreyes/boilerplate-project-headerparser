// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var whoami = require('whoami-exec');
 


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.use("/api/whoami", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  var language = req.get('Accept-Language');
  var userAgent = req.headers['user-agent']
  
  console.log(req.headers['user-agent']);
  res.json({ipaddress: req.ip, language: language, "software": userAgent });
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
