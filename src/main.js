
import { renderItems } from './view.js';
import { search, filterData} from './dataFunctions.js'; //importamos las funciones
import data from './data/pokemon/pokemon.js';


const btnBuscar = document.querySelector("#btn-buscar");
const root = document.querySelector('#root')
const select = document.querySelector('#opciones[data-testid="select-filter"][name="type"]');


select.addEventListener("change", function(event) {
  const valueSelect = select.value;
  const filterPokemon = filterData(data.pokemon, 'type', valueSelect); //trae la funcion y se le mandan los datos pero se especifica los datos
  root.innerHTML = "";
  filterPokemon.forEach(itemPokemon => { //recorre los pokemones de tipo seleccionado y pinta los elementos que va encontrando
    root.appendChild(renderItems(itemPokemon));
  });
});



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



