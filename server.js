var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require ("method-override")
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlEncoded)({
    extended: false
});
app.used(methodOverride('_method'))
var PORT = 3000

app.listen(PORT);