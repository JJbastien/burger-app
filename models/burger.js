var ORM = require("../config/orm.js")

var burger = {
    all: function(cb){
        ORM.all('burger', function(res){
    cb(res)
    })
    },
    update: function (id, cb){
        ORM.update("burger", id, cb)
    }
}
module.exports= burger