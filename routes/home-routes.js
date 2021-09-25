const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Pokemon, } = require('../models');

// to do display all pokemon for homepage
router.get('/', withAuth, (req,res) => {
  console.log(req.session);
  Pokemon.findAll({
//put stuff here 
     
  })
})

.then(function(allPokemon) {
  res.render ("index", {
    Pokemon: allPokemon 
  });
});
});

/ Render 404 page for any unmatched routes
applicationCache.get("*", function (req, res){
  res.render("404");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())

  return next();

  res.redirect("/signin");
}

function isAuthentic (req, res, next) {
  if (req.user) {
  return next ();
  else {
    return res.status(401).json({error: "User not authenticated"})
  }  
  }
};

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;