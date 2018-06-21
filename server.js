var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var html = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",html);
app.use("/api",api);

app.listen(PORT, ()=>{
    console.log("App listening on PORT:" + PORT);
});


