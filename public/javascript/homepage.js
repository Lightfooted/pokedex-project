 //This function plays pokemon center music from original pokemon game 
 window.onload = function () {
    document.getElementById("my_audio").play();
    my_audio.volume = 0.08;
  }
 
Audio.prototype.play = (function(play) {
  return function () {
    const audio = this,
        args = arguments,
        promise = play.apply(audio, args);
    if (promise !== undefined) {
      promise.catch(_ => {
        // if autoplay was prevented, button to start playing.
        const el = document.createElement("playButton");
        el.innerHTML = "Play";
        el.addEventListener("click", function(){play.apply(audio, args);});
        this.parentNode.insertBefore(el, this.nextSibling)
      });
    }
  };
  })(Audio.prototype.play);


  //Fetches the pokeapi
  const pokedex = document.getElementById('pokedex');
 
  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      displayPokemon(pokemon);
    });
  };
 
  const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
      .map(
        (pokeman) => `
         <li class="card">
             <img class="card-image" src="${pokeman.image}"/>
             <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
             <p class="card-subtitle">Type: ${pokeman.type}</p>
             </li>
     `
      )
      .join('');
    pokedex.innerHTML = pokemonHTMLString;
  };
 
  fetchPokemon();

  //TO-DO: Add weight and height