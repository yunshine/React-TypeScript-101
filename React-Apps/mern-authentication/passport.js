const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        // something went wrong with the database...
        if (err) {
            return done(err);
        }

        // if no user exists...
        if (!user) {
            return done(null, false);
        }

        // check if password is correct useing the comparePassword method in the mdoel...
        user.comparePassword(password, done);
    });
}));