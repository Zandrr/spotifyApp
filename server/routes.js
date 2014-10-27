var passport = require('passport'),
    request  = require('request');
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

app.get('/v1/search', function(req, res){
  request({url: "https://api.spotify.com/v1/search", qs: {q: req.query.q, type: req.query.type} },
      function(err, response, body){
        if(!err && res.statusCode == 200) {
          res.send(body);
        }
      });
});

// app.get('/v1/artists/:id/related-artists', function(req, res){
//   request({url: "https://api.spotify.com/v1/artists/", qs: {q: req.query.q, type: req.query.type} },
//       function(err, response, body){
//         if(!err && res.statusCode == 200) {
//           res.send(body);
//         }
//       });
// })

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