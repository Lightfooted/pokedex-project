const router = require('express').Router();

//router.get('/', (req, res) => {
  //res.render('homepage');
//});

//test

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    name: 'Bulbasaur',
    height: 7,
    weight: 69,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    entry_number: 1,
    user: {
      username: 'Ash'
    }
  });
});

//login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;