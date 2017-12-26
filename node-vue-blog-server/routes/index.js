var express = require('express');
var router = express.Router();

const auth = require('./../controller/auth.controller');
const user = require('./../controller/user.controller')

//auth route
router.post('/login',auth.login)
router.get('/logout',auth.logout)

router.use('/*', (req, res, next) => {
  if (!req.session.user) {
    res.render('login');
  }else{
    next();
  }
})

//user route
router.get('/', user.index)

module.exports = router;
