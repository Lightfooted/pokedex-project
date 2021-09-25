// Make search function

const express = require('express')
const app = express()

// import sequelize connection
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//pokemon api 
var PokeApi = require('pokeapi');
var api = PokeApi.v1();

api.get('pokemon', 1).then(function(bulbasaur) {
    console.log("Here's Bulbasaur:", bulbasaur);
	api.get(bulbasaur.moves).then(function(moves) {
	    console.log("Full move list:" + moves);
    })
}, function(err) {
    console.log('ERROR', err);
});

function renderEverything(){
  let allPokemonContainer = document.querySelector('#poke-container')
  allPokemonContainer.innerText = "";
  fetchKantoPokemon();
}

//fetches the original 151 pokemon 
function fetchKantoPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(function(allpokemon){
      allpokemon.results.forEach(function(pokemon){
          fetchPokemonData(pokemon);
      })
  })
}

   function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
        renderPokemon(pokeData)
      })
    }

    function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('poke-container');
        let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
        let pokeName = document.createElement('h4')
        pokeName.innerText = pokeData.name
        let pokeNumber = document.createElement('p')
        pokeNumber.innerText = `#${pokeData.id}`
        let pokeTypes = document.createElement('ul') 
        //ul list will hold the pokemon types
        createTypes(pokeData.types, pokeTypes) 
        // helper function to go through the types array and create li tags for each one
        pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
        //appending all details to the pokeContainer div
        allPokemonContainer.appendChild(pokeContainer);       
        //appending that pokeContainer div to the main div which willhold all the pokemon cards
        }

        function createTypes(types, ul){
            types.forEach(function(type){
            let typeLi = document.createElement('li');
            typeLi.innerText = type['type']['name'];
            ul.append(typeLi)
            })
          }

       //This will generate picture for pokemon want to look into different picture options  
          
       function createPokeImage(pokeID, containerDiv){
        let pokeImgContainer = document.createElement('div')
        pokeImgContainer.classList.add('image')
    
        let pokeImage = document.createElement('img')
        pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
    
        pokeImgContainer.append(pokeImage);
        containerDiv.append(pokeImgContainer);
    }

    // sync sequelize models to the database, then turn on the server
    sequelize.sync({ force: false}).then(() => {
      app.listen(PORT, () => console.log('Now listening'));
    });