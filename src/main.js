import { request, createPokemon } from './dataFunctions.js';
//import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const btnBuscar = document.querySelector("#btn-buscar");
const url = 'https://pokeapi.co/api/v2/pokemon/';

btnBuscar.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  console.log(name);
  let  holA = createPokemon(request(url, name));
  console.log(holA);
});





// const botonesExperto = document.querySelectorAll(".experto");

// botonesExperto.forEach(boton => {
//     boton.addEventListener("click", function () {

//         document.querySelector(".experto").style.opacity = 0;
//         document.querySelector(".principiante").style.opacity = 0;
//         document.querySelector(".entrada").style.opacity = 0;
//         document.querySelector("").style.opacity = 1;
//         document.querySelectorAll(".input-name,.filtros").style.opacity =1;

//     });
// });



