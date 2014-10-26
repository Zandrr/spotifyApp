var passport         = require('passport'),
    SpotifyStrategy  = require('passport-spotify').Strategy;

module.exports = {
  init: function(app) {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

    passport.use(new SpotifyStrategy({
        clientID: process.env.SPOTIFYCLIENT,
        clientSecret: process.env.SPOTIFYSECRET,
        callbackURL: "http://localhost:8888/auth/spotify/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
          return done(null, profile);
        });
      }
    ));
  return passport;
  } 
}