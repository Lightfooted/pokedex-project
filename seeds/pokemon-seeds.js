const { Pokemon } = require('../models');

const pokedata = [
  {
    id: 1,
    name: 'Bulbasaur',
    height: 7,
    weight: 69,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    entry_number: 1
  },
  {
    id: 2,
    name: 'Ivysaur',
    height: 10,
    weight: 130,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    entry_number: 2
  },
  {
    id: 3,
    name: 'Venusaur',
    height: 20,
    weight: 1000,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    entry_number: 3
  },
  {
    id: 4,
    name: 'Charmander',
    height: 6,
    weight: 85,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    entry_number: 4
  },
  {
    id: 5,
    name: 'Charmeleon',
    height: 11,
    weight: 190,
    front_default: '"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    entry_number: 5
  },
  {
    id: 6,
    name: 'Charizard',
    height: 17,
    weight: 905,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    entry_number: 6
  },
  {
    id: 7,
    name: 'Squirtle',
    height: 5,
    weight: 90,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    entry_number: 7
  },
  {
    id: 8,
    name: 'Wartortle',
    height: 10,
    weight: 225,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    entry_number: 8
  },
  {
    id: 9,
    name: 'Blastoise',
    height: 16,
    weight: 855,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    entry_number: 9
  },
  {
    id: 10,
    name: 'Caterpie',
    height: 3,
    weight: 29,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    entry_number: 10
  },
  {
    id: 11,
    name: 'Metapod',
    height: 7,
    weight: 99,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    entry_number: 11
  },
  {
    id: 12,
    name: 'Butterfree',
    height: 11,
    weight: 320,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    entry_number: 12
  },
  {
    id: 13,
    name: 'Weedle',
    height: 3,
    weight: 32,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    entry_number: 13
  },
  {
    id: 14,
    name: 'Kakuna',
    height: 6,
    weight: 100,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    entry_number: 14
  },
  {
    id: 15,
    name: 'Beedrill',
    height: 10,
    weight: 295,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    entry_number: 15
  },
  {
    id: 16,
    name: 'Pidgey',
    height: 3,
    weight: 18,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    entry_number: 16
  },
  {
    id: 17,
    name: 'Pidgeotto',
    height: 11,
    weight: 300,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    entry_number: 17
  },
  {
    id: 18,
    name: 'Pidgeot',
    height: 15,
    weight: 395,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    entry_number: 18
  },
  {
    id: 19,
    name: 'Rattata',
    height: 3,
    weight: 35,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    entry_number: 19
  },
  {
    id: 20,
    name: 'Raticate',
    height: 7,
    weight: 185,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    entry_number: 20
  }
];

const seedPokemon = () => Pokemon.bulkCreate(pokedata);

module.exports = seedPokemon;