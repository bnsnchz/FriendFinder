var express = require("express");
var bodyParser = require("body-parser");
var friends = require("../data/friends");
var router = express.Router();

router.get("/friends", (req, res) => {
  return res.json(friends);
});

router.post("/friends", (req, res) => {
  var newDifference = [];
  var newFriend = req.body;
  var friendScores = newFriend.scores;

  for(var i = 0; i < friends.length; i++){
    var difference = 0;
    for(var j = 0; j < friendScores.length; j++){    
      difference += Math.abs(friends[i].scores[j] - friendScores[j]);
    }
      newDifference.push(difference);
    
  }

  var compare = newDifference[0];

  for(var i = 0; i < newDifference.length; i++){
    if(newDifference[i] < compare){
      compare = newDifference[i];
    }
  }

  friends.push(newFriend);

  var match1 = newDifference.indexOf(compare);
  var match2 = friends[match1];

  var matchName = match2.name;
  var matchImage = match2.image;

  res.json(match2);
  console.log(matchName, matchImage);
});

module.exports = router;
