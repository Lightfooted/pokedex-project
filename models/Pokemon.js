const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Pokemon extends Model {
  static(body, models) {
    return models.UserPokemon.create({
      user_id: body.user_id,
      pokemon_id: body.pokemon_id
    }).then(() => {
      return Pokemon.findOne({
        where: {
          id: body.pokemon_id
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
        ]
      });
    });
  }
}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    front_default: {
      type: DataTypes.STRING,
      allowNull: true
    },
    entry_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon'
  }
);

module.exports = Pokemon;