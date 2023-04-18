const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
require('dotenv').config();
const User = require('./models/User');

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ oauthId: profile.id }, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        // create a new user with the profile information
        var newUser = new User({
          oauthId: profile.id,
          name: profile.displayName,
        });
        newUser.save(function (err) {
          if (err) {
            return cb(err);
          }
          return cb(null, newUser);
        });
      } else {
        return cb(null, user);
      }
    });
  }));


  


passport.serializeUser(function(user, done) {
    done(null, user);
    });

passport.deserializeUser(function(user, done) {
    done(null, user);
    });


