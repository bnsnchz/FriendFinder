var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends");
var router =  express.Router();


router.get("/friends", (req, res)=> {
    return res.json(friends);
  });

router.post("/friends", (req, res)=> {

    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });

  module.exports = router;  