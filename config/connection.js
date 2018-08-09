var mysql = require("mysql");
var connection = mysqlcreateConnection({
    host: "utlocal",
    user: "root",
    password: "root",
    database: "burger_db"
})
connection.connect(function(){
    if (err) throw err,
    console.log("connected as " + connection.threadId)
} );
module.exports = connection;