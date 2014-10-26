var passport = require('passport');
module.exports = function(app) {



//Auth Routes
app.get('/auth/spotify',passport.authenticate('spotify'));
app.get('/auth/spotify/callback', 
  passport.authenticate('spotify', {failureRedirect: '/'}),
    function(req, res){
      res.redirect('/profile');
});


//API Routes

app.get('/v1/me', function(req, res){
  if(req.isAuthenticated()){
    res.json(req.user);
  } else {
    res.send(401);
  }
});

//App Routes
  var renderApp = function(req, res) {
    if(!req.isAuthenticated()){
      return res.redirect('/');
    }
    res.render('index');
  }

  app.get('/', function(req, res) {
    res.render('index');
  });
  app.get('/profile', renderApp);
};