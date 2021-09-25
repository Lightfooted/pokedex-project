const Pokemon = require('./Pokemon');
const User = require('./User');
const UserPokemon = require('./UserPokemon');

// Associations
User.belongsToMany(Pokemon, {
  foreignKey: 'user_id',
  through: UserPokemon
});

Pokemon.belongsToMany(User, {
  foreignKey: 'pokemon_id',
  through: UserPokemon
});

module.exports = {
  Pokemon,
  User,
  UserPokemon
};