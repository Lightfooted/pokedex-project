const Pokemon = require('./Pokemon');
const User = require('./User');
const UserPokemon = require('./UserPokemon');

// Associations
User.belongsToMany(Pokemon, {
  foreignKey: 'user_id',
  through: UserPokemon,
  as: 'collected_pokemon'
});

Pokemon.belongsToMany(User, {
  foreignKey: 'pokemon_id',
  through: UserPokemon,
  as: 'collected_pokemon'
});

UserPokemon.belongsTo(User, {
  foreignKey: 'user_id'
});

UserPokemon.belongsTo(Pokemon, {
  foreignKey: 'pokemon_id'
});

User.hasMany(UserPokemon, {
  foreignKey: 'user_id'
});

Pokemon.hasMany(UserPokemon, {
  foreignKey: 'pokemon_id'
});

module.exports = {
  Pokemon,
  User,
  UserPokemon
};