
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data.pokemon);

const btnBuscar = document.querySelector("#btn-buscar");
const root = document.querySelector('#root')

root.appendChild(renderItems(data.pokemon[5]))

btnBuscar.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  console.log(name);
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



