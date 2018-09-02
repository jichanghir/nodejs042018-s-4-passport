var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/');
    }
);

router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;
