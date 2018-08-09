var connection = require("./connection.js");
var ORM = {
all: function(tableInput, cb){connection.query(`SELECT *FROM` +tableInput), function (err, result)
}
}