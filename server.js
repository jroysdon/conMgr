var express = require('express');
var Parse = require('parse/node');
var path = require('path');

Parse.initialize("cmparseserver");
Parse.serverURL = 'http://cmparseserver.herokuapp.com/parse'

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
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
