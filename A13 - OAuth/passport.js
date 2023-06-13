const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:"608990859171-20on9gnloa6po6cnd4plvcfdhfvvodlv.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:4000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

