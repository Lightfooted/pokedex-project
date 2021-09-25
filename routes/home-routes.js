const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Pokemon, } = require('../models');

// to do display all pokemon for homepage


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;