const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');

// router.get('/', (req, res) => {
//   res.render('homepage', {
//     id: 1,
//     name: 'Bulbasaur',
//     height: 7,
//     weight: 69,
//     front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//     entry_number: 1,
//     user: {
//       username: 'Ash'
//     }
//   });
// });

//more test

router.get('/', (req, res) => {
  console.log('======================');
  Pokemon.findAll({
    attributes: [
      'id',
      'name',
      'height',
      'weight',
      'front_default',
      'entry_number',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM user_pokemon WHERE pokemon.id = user_pokemon.pokemon_id)'), 'collected_pokemon']
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
        as: 'collected_pokemon'
      }
    ]
  })
    .then(dbPokemonData => {
      const pokemon = dbPokemonData.map(pokemon => pokemon.get({ plain: true }));

      res.render('homepage', {
        pokemon,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(dbPokemonData);
      res.status(500).json(err);
    });
});

// get single pokemon. working correctly
router.get('/pokemon/:name', (req, res) => {
  Pokemon.findOne({
    where: {
      name: req.params.name
    },
    attributes: [
      'id',
      'name',
      'height',
      'weight',
      'front_default',
      'entry_number',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM user_pokemon WHERE pokemon.id = user_pokemon.pokemon_id)'), 'collected_pokemon']
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
        as: 'collected_pokemon'
      }
    ]
  })
    .then(dbPokemonData => {
      if (!dbPokemonData) {
        res.status(404).json({ message: 'No Pokemon found with this name' });
        return;
      }

      const pokemon = dbPokemonData.get({ plain: true });

      console.log(pokemon);

      res.render('single-pokemon', {
        pokemon,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
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