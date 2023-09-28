
import { renderItems } from './view.js';
import { search, filterData, sortData} from './dataFunctions.js'; //importamos las funciones
import data from './data/pokemon/pokemon.js';


const btnBuscar = document.querySelector("#btn-buscar");
const limpiar = document.querySelector('[data-testid="button-clear"]');
const list = document.querySelector('#list');
const select = document.querySelector('#opciones[data-testid="select-filter"][name="type"]');
const orderasd = document.querySelector('#opcions-order[data-testid="select-sort"]');
let filterPokemon;


select.addEventListener("change", function(event) {
  const valueSelect = select.value;
  filterPokemon = filterData(data.pokemon, 'type', valueSelect); //trae la funcion y se le mandan los datos pero se especifica los datos
  list.innerHTML = "";
  filterPokemon.forEach(itemPokemon => { //recorre los pokemones de tipo seleccionado y pinta los elementos que va encontrando
    list.appendChild(renderItems(itemPokemon));
  });
});

orderasd.addEventListener("change", function(event) {
  const sortOrder =  orderasd.value;
  // Ordena los datos.
  const sortedData = sortData(filterPokemon, 'name', sortOrder);
  // Carga los elementos de tarjetas ordenados.
  list.innerHTML = "";
  sortedData.forEach((a,b) => {
    list.appendChild(renderItems(a,b));
  });
});

//carga los elementos de tarjetas al inicio de la pagina
data.pokemon.forEach((pokemon) => {
  list.appendChild(renderItems(pokemon));
});

btnBuscar.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const searchPokemon = search(data, name);
  list.innerHTML = "";
  list.appendChild(renderItems(searchPokemon));
});

limpiar.addEventListener("click", function() {
  select.value = "";
  list.innerHTML = "";
  data.pokemon.forEach((pokemon) => {
    list.appendChild(renderItems(pokemon));
  });
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



