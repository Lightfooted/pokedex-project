const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Pokemon, User, UserPokemon } = require('../../models');
const withAuth = require('../../utils/auth');

// get all Pokemon
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

  //get a single pokemon
  router.get('/:id', (req, res) => {
    Pokemon.findOne({
      where: {
        id: req.params.id
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
        res.json(dbPokemonData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //post
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
  
  router.put('/upvote', withAuth, (req, res) => {
    Pokemon.upvote({ ...req.body, user_id: req.session.user_id }, { UserPokemon, Pokemon, User })
      .then(updatedUserPokeData => res.json(updatedUserPokeData))
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

  //delete a pokemon
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