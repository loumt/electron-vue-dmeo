
const user = require('./../services/user.service')
/**
 * Enter Page
 */
exports.index = function(req,res,next){
    user.getUsers()
    res.render('home')
}


