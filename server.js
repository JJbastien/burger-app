var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require ("method-override");
var exphbs = require("express-handlebars");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlEncoded)({
    extended: false
});

app.use(methodOverride('_method'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var PORT = 3000
var routes = require ("./controller/burger_controller.js")
app.use(routes)

app.listen(PORT)
{console.log("connected on +"+ PORT)}