const jwt = require('jsonwebtoken');

module.exports = (app, passport) => {
    /* GET home page. */
    app.get('/', (req, res) => {
      res.json({result: true});
    });

    app.post('/login', (req, res) => {
        let user = {
            id: 123,
            name: 'test'
        };
        const token = jwt.sign(JSON.parse(JSON.stringify(user)), 'dlkfbvhknfklvdfbjhnfksd', {expiresIn: 60 * 5});
        res.json({success: true, token: token});

        // const { email, password } = req.body;
         // User.getUserByEmail(email, (err, user) => {
         //    if (err) {
         //        console.error(err);
         //        res.json({success: false, message: 'Some error'});
         //    }
         //    else if (!user){
         //        res.json({success: false, message: 'Not user found'});
         //    }
         //    else {
         //        User.comparePassword(password, user.password, (err, isMatch) => {
         //            if (err) {
         //                console.error(err);
         //                res.json({success: false, message: 'Some error'});
         //            }
         //            if (isMatch) {
         //                const token = jwt.sign(JSON.parse(JSON.stringify(user)), 'secret', {expiresIn: 60 * 5});

         //                res.json({success: true, token: token});
         //            }
         //            else {
         //                console.error('Some Error');
         //                res.json({success: false, message: 'Some error'});
         //            }
         //        })
         //    }
         // })
    });

    app.post('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
        res.json({
            user: req.user
        })
    });

    app.post('/logout', (req, res) => {
        req.logout();
        res.json({success: true, message: 'Successfully logout'});
    });
}

