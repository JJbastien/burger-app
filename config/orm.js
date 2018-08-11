var connection = require("./connection.js");
var ORM = {
    all: function(tableInput, cb){
    connection.query(`SELECT * FROM` + tableInput +";", function (err, result){
        if (err)throw err;
        cb(result);
        
    })
    },

    update : function (tableInput, condition, cb){
        connnecton.query( 'UPDATE' + tableInput + SET + 'eaten = true WHERE id =' + condition + ';',function (err, result){
            if(err)throw err;
            cb(result);
        })
    }
    
};

module.exports = ORM;
