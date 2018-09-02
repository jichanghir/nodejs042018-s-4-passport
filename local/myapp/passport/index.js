var LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        function(username, password, done) {

            // User.getUserByUsername(username, (err, user) => {
            //     if (err) {
            //         throw new HttpError(err, 500);
            //     }
            //     if (!user) {
            //         return done(null, false, {message: 'Uknown User'});
            //     }

            //     User.comparePassword(password, user.password, (err, isMatch) => {
            //         if (err) {
            //             throw new HttpError(err, 500);
            //         }
            //         if (isMatch) {
            //             return done(null, user);
            //         }
            //         else {
            //             return done(null, false, {message: 'Invalid Password'});
            //         }
            //     })
            // })

            let user = {
                id: 123,
                name: 'Test'
            };
            return done(null, user);
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(id, done) {
        done(null, {});
        // User.getUserById(id, function (err, user) {
        //   done(err, user);
        // });
    });
}

