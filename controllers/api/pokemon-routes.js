const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Pokemon, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all Pokemon
router.get('/', (req, res) => {
    console.log('======================');
    Pokemon.findAll({
      attributes: ['id', 'name', 'height', 'weight', 'front_default', 'entry_number', 'created_at',
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
  .then(dbPokemonData => res.json(dbPokemonData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  //GET a single pokemon
  router.get('/:name', (req, res) => {
    Pokemon.findOne({
      where: {
        name: req.params.name
      },
      attributes: ['id', 'name', 'height', 'weight', 'front_default', 'entry_number', 'created_at',
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
          res.status(404).json({ message: 'No Pokemon found with this id' });
          return;
        }
        dbPokemonData.username = req.session.username
        res.json(dbPokemonData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', withAuth, (req, res) => {
    Pokemon.create({
      name: req.body.name,
      height: req.body.height,
      weight: req.body.weight,
      front_default: req.body.front_default,
      entry_number: req.body.entry_number,
      user_id: req.session.user_id
    })
      .then(dbPokemonData => res.json(dbPokemonData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/:id', withAuth, (req, res) => {
    Pokemon.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPokemonData => {
        if (!dbPokemonData) {
          res.status(404).json({ message: 'No Pokemon found with this id' });
          return;
        }
        res.json(dbPokemonData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //DELETE a Pokemon TO-DO: Give the user the ability to remove Pokemon from favorites
  router.delete('/:id', (req, res) => {
    Pokemon.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPokemonData => {
        if (!dbPokemonData) {
          res.status(404).json({ message: 'No Pokemon found with this id' });
          return;
        }
        res.json(dbPokemonData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;