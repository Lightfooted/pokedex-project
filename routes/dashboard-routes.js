const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokemon, User } = require('../models');
const withAuth = require('../utils/auth');

// display favorited pokemon
router.get('/', withAuth, (req,res) => {
    console.log(req.session);
    Pokemon.findAll({
        where: {
            
        }
    })
})

module.exports = router;