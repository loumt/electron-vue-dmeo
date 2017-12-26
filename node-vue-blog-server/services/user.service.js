const {query} =  require('./../db/modules/dbUtil');

exports.getUsers = function(){
    query('SELECT * FROM `user`', function (error, results) {

        if(error){
            console.log(error)
        }
        
        console.dir(results);
    });
}