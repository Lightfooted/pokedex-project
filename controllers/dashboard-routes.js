const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Pokemon.findAll({
      where: {
        user_id: req.session.user_id
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
        const pocketmonsters = dbPokemonData.map(post => post.get({ plain: true }));
        res.render('dashboard', { pocketmonsters, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/edit/:id', withAuth, (req, res) => {
    Pokemon.findByPk(req.params.id, {
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
        if (dbPokemonData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit-pokemon', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


module.exports = router;