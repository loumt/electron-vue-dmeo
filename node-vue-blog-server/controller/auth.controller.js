/**
 * Auths
 */
const loumt = require('./../auth/users/loumt.json')

/**
 * Login Action
 */
exports.login = function (req, res, next) {
  let {
    username: name,
    password: pwd
  } = req.body;

  if (name == loumt.username && pwd == loumt.password) {
    req.session.user = {
      username: name,
      password: pwd
    };
    res.status(200).json({success:true,message:"登录成功!!!!"})
  } else {
    res.status(200).json({success:false,message:"登录失败!!!!"})
  }
}

/**
 * Logout Action
 */
exports.logout = function (req, res, body) {
  if (req.session.user) {
    console.log(`delete user :` + req.session.user.usrename);
    delete req.session.user
  }
  res.send('Hello Logout')
}
