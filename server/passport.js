const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const User = require('./models/User');
const passport = require('passport');

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;



    passport.use(new GoogleStrategy({ 

        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: '/auth/google/callback',
    }, 
    async (accessToken, refreshToken, profile, done) => {
     const newUser = {
          oauthId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
          
    }
    try {
      let user = await User.findOne({ oauthId: profile.id });
      if (user) {
        done(null, user);
      } else {
        user = await User.create(newUser);
        done(null, user);
      }
    } catch (err) {
      console.log(err);
    }
  }
));
        

  


passport.serializeUser(function(user, done) {
    done(null, user);
    });

passport.deserializeUser(function(user, done) {
    done(null, user);
    });
  

