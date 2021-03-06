const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPokemon extends Model {}

UserPokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      pokemon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pokemon',
          key: 'id'
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_pokemon'
  }
);

module.exports = UserPokemon;