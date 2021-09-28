const router = require('express').Router();

const pokemonRoutes = require('./pokemon-routes');
const userRoutes = require('./user-routes');

router.use('/pocketmonsters', pokemonRoutes);
router.use('/users', userRoutes);

module.exports = router;