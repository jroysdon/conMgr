var express = require('express');

var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var databaseUri = 'mongodb://conAdmin:FtF-XFy-HJ8-Mu3@ds011399.mlab.com:11399/heroku_lk237rt0';

var api = new ParseServer({
  serverURL: "https://your-app-name.herokuapp.com/parse",
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'conMgr',
  masterKey: process.env.MASTER_KEY || 'gigglemonkeytinklepants' //Add your master key here. Keep it secret!
});

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
