const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: '1025241287708-m4vg873891rf3fupk6hftem7ll07k3st.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
    });

passport.deserializeUser(function(user, done) {
    done(null, user);
    });

// User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//   });

// cb

