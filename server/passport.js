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
        callbackURL: process.env.SPOTIFY_CALLBACK_URL
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