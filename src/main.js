
import { renderItems } from './view.js';
import { search, filter} from './dataFunctions.js';

import data from './data/pokemon/pokemon.js';
// import pokemon from './data/pokemon/pokemon.js';



const btnBuscar = document.querySelector("#btn-buscar");
const root = document.querySelector('#root')



const select = document.querySelector('#opciones[data-testid="select-filter"][name="type"]');
select.addEventListener("change", function(event) {
  const type = select.value;
  console.log(type);
  const filterPokemon = filter(data, type);
  root.innerHTML = "";
  root.appendChild(renderItems(filterPokemon));
});


// root.appendChild(renderItems(data.pokemon[5]))


//carga los elementos de tarjetas al inicio de la pagina
data.pokemon.forEach((pokemon) => {
  root.appendChild(renderItems(pokemon));
});

btnBuscar.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const searchPokemon = search(data, name);
  root.innerHTML = "";
  root.appendChild(renderItems(searchPokemon));
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



