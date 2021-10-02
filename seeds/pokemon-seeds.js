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
    entry_number: 15,
    user_id: 1
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
  },
  {
    id: 21,
    name: 'Spearow',
    height: 3,
    weight: 20,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    entry_number: 21
  },
  {
    id: 22,
    name: 'Fearow',
    height: 12,
    weight: 380,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    entry_number: 22
  },
  {
    id: 23,
    name: 'Ekans',
    height: 20,
    weight: 69,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    entry_number: 23
  },
  {
    id: 24,
    name: 'Arbok',
    height: 35,
    weight: 650,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    entry_number: 24
  },
  {
    id: 25,
    name: 'Pikachu',
    height: 4,
    weight: 20,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    entry_number: 25
  },
  {
    id: 26,
    name: 'Raichu',
    height: 8,
    weight: 300,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    entry_number: 26
  },
  {
    id: 27,
    name: 'Sandshrew',
    height: 6,
    weight: 120,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    entry_number: 27
  },
  {
    id: 28,
    name: 'Sandslash',
    height: 10,
    weight: 295,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    entry_number: 28
  },
  {
    id: 29,
    name: 'Nidoran-f',
    height: 4,
    weight: 70,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    entry_number: 29
  },
  {
    id: 30,
    name: 'Nidorina',
    height: 8,
    weight: 200,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    entry_number: 30
  },
  {
    id: 31,
    name: 'Nidoqueen',
    height: 13,
    weight: 600,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    entry_number: 31
  },
  {
    id: 32,
    name: 'Nidoran-m',
    height: 5,
    weight: 90,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    entry_number: 32
  },
  {
    id: 33,
    name: 'Nidorino',
    height: 9,
    weight: 195,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    entry_number: 33
  },
  {
    id: 34,
    name: 'Nidoking',
    height: 14,
    weight: 620,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    entry_number: 34
  },
  {
    id: 35,
    name: 'Clefairy',
    height: 6,
    weight: 75,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    entry_number: 35
  },
  {
    id: 36,
    name: 'Clefable',
    height: 13,
    weight: 400,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    entry_number: 36
  },
  {
    id: 37,
    name: 'Vulpix',
    height: 6,
    weight: 99,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    entry_number: 37
  },
  {
    id: 38,
    name: 'Ninetales',
    height: 11,
    weight: 199,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    entry_number: 38
  },
  {
    id: 39,
    name: 'Jigglypuff',
    height: 5,
    weight: 55,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    entry_number: 39
  },
  {
    id: 40,
    name: 'Wigglytuff',
    height: 10,
    weight: 120,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    entry_number: 40
  },
  {
    id: 41,
    name: 'Zubat',
    height: 8,
    weight: 75,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    entry_number: 41
  },
  {
    id: 42,
    name: 'Golbat',
    height: 16,
    weight: 550,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    entry_number: 42
  },
  {
    id: 43,
    name: 'Oddish',
    height: 5,
    weight: 54,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    entry_number: 43
  },
  {
    id: 44,
    name: 'Gloom',
    height: 8,
    weight: 86,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    entry_number: 44
  },
  {
    id: 45,
    name: 'Vileplume',
    height: 12,
    weight: 186,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    entry_number: 45
  },
  {
    id: 46,
    name: 'Paras',
    height: 3,
    weight: 54,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    entry_number: 46
  },
  {
    id: 47,
    name: 'Parasect',
    height: 10,
    weight: 295,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    entry_number: 47
  },
  {
    id: 48,
    name: 'Venonat',
    height: 10,
    weight: 300,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    entry_number: 48
  },
  {
    id: 49,
    name: 'Venomoth',
    height: 15,
    weight: 125,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    entry_number: 49
  },
  {
    id: 50,
    name: 'Diglett',
    height: 2,
    weight: 8,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    entry_number: 50
  },
  {
    id: 51,
    name: 'Dugtrio',
    height: 7,
    weight: 333,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    entry_number: 51
  },
  {
    id: 52,
    name: 'Meowth',
    height: 4,
    weight: 42,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    entry_number: 52
  },
  {
    id: 53,
    name: 'Persian',
    height: 10,
    weight: 320,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    entry_number: 53
  },
  {
    id: 54,
    name: 'Psyduck',
    height: 8,
    weight: 196,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    entry_number: 54
  },
  {
    id: 55,
    name: 'Golduck',
    height: 17,
    weight: 766,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    entry_number: 55
  },
  {
    id: 56,
    name: 'Mankey',
    height: 5,
    weight: 280,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    entry_number: 56
  },
  {
    id: 57,
    name: 'Primeape',
    height: 10,
    weight: 320,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    entry_number: 57
  },
  {
    id: 58,
    name: 'Growlithe',
    height: 7,
    weight: 190,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    entry_number: 58
  },
  {
    id: 59,
    name: 'Arcanine',
    height: 19,
    weight: 1550,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    entry_number: 59
  },
  {
    id: 60,
    name: 'Poliwag',
    height: 6,
    weight: 124,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    entry_number: 60
  },
  {
    id: 61,
    name: 'Poliwhirl',
    height: 10,
    weight: 200,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    entry_number: 61
  },
  {
    id: 62,
    name: 'Poliwrath',
    height: 13,
    weight: 540,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    entry_number: 62
  },
  {
    id: 63,
    name: 'Abra',
    height: 9,
    weight: 195,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    entry_number: 63
  },
  {
    id: 64,
    name: 'Kadabra',
    height: 13,
    weight: 565,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    entry_number: 64
  },
  {
    id: 65,
    name: 'Alakazam',
    height: 15,
    weight: 480,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    entry_number: 65
  },
  {
    id: 66,
    name: 'Machop',
    height: 8,
    weight: 195,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    entry_number: 66
  },
  {
    id: 67,
    name: 'Machoke',
    height: 15,
    weight: 705,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    entry_number: 67
  },
  {
    id: 68,
    name: 'Machamp',
    height: 16,
    weight: 1300,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    entry_number: 68
  },
  {
    id: 69,
    name: 'Bellsprout',
    height: 7,
    weight: 40,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    entry_number: 69
  },
  {
    id: 70,
    name: 'Weepinbell',
    height: 10,
    weight: 64,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    entry_number: 70
  },
  {
    id: 71,
    name: 'Victreebel',
    height: 17,
    weight: 155,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    entry_number: 71
  },
  {
    id: 72,
    name: 'Tentacool',
    height: 9,
    weight: 455,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    entry_number: 72
  },
  {
    id: 73,
    name: 'Tentacruel',
    height: 16,
    weight: 550,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    entry_number: 73
  },
  {
    id: 74,
    name: 'Geodude',
    height: 4,
    weight: 200,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    entry_number: 74
  },
  {
    id: 75,
    name: 'Graveler',
    height: 10,
    weight: 1050,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    entry_number: 75
  },
  {
    id: 76,
    name: 'Golem',
    height: 14,
    weight: 3000,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    entry_number: 76
  },
  {
    id: 77,
    name: 'Ponyta',
    height: 10,
    weight: 300,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    entry_number: 77
  },
  {
    id: 78,
    name: 'Rapidash',
    height: 17,
    weight: 950,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    entry_number: 78
  },
  {
    id: 79,
    name: 'Slowpoke',
    height: 12,
    weight: 360,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    entry_number: 79
  },
  {
    id: 80,
    name: 'Slowbro',
    height: 16,
    weight: 785,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    entry_number: 80
  },
  {
    id: 81,
    name: 'Magnemite',
    height: 3,
    weight: 60,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    entry_number: 81
  },
  {
    id: 82,
    name: 'Magneton',
    height: 10,
    weight: 600,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    entry_number: 82
  },
  {
    id: 83,
    name: 'Farfetchd',
    height: 8,
    weight: 150,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    entry_number: 83
  },
  {
    id: 84,
    name: 'Doduo',
    height: 14,
    weight: 392,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    entry_number: 84
  },
  {
    id: 85,
    name: 'Dodrio',
    height: 18,
    weight: 852,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    entry_number: 85
  }
];

const seedPokemon = () => Pokemon.bulkCreate(pokedata);

module.exports = seedPokemon;