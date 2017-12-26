const connection = require('./../connection');

exports.query = function(sql,callback){
    connection.query(sql, function (error, results, fields) {
        if(error){
            callback(error)
        }
        callback(null,results);
    });
}