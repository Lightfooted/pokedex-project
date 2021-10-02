 //This function plays pokemon center music from original pokemon game 
 window.onload = function () {
   document.getElementById("my_audio").play();
   my_audio.volume = 0.03;
 }

 Audio.prototype.play = (function (play) {
   return function () {
     const audio = this,
       args = arguments,
       promise = play.apply(audio, args);
     if (promise !== undefined) {
       promise.catch(_ => {
         // if autoplay was prevented, button to start playing.
         const el = document.createElement("playButton");
         el.innerHTML = "Play";
         el.addEventListener("click", function () {
           play.apply(audio, args);
         });
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
       height: result.height,
       weight: result.weight,
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
             <p class="card-subtitle">Height: ${pokeman.height}</p>
             <p class="card-subtitle">Weight: ${pokeman.weight}</p>
             </li>
     `
     )
     .join('');
   pokedex.innerHTML = pokemonHTMLString;
 };

 fetchPokemon();

//scroll to top button 
 //Get the button
 var mybutton = document.getElementById("myBtn");
 
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction()
 };

 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }