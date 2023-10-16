
import { renderItems} from './view.js';
import { search, filterData, sortData, computeStats, statsPokemonDebil, contadorPokemonTipo} from './dataFunctions.js'; //importamos las funciones
import data from './data/pokemon/pokemon.js';


const btnBuscar = document.querySelector("#btn-buscar");
const btnStatistic = document.querySelector('[data-testid="button-statistics"]');
const btnStatisticDebil = document.querySelector('[data-testid="button-statisticsDebil"]');
const limpiar = document.querySelector('[data-testid="button-clear"]');
const list = document.querySelector('#list');
const select = document.querySelector('#opciones[data-testid="select-filter"][name="select-type"]');
const orderasd = document.querySelector('#opcions-order[data-testid="select-sort"]');



select.addEventListener("change", function () {
  const valueSelect = select.value;
  const filterPokemon = filterData(data.pokemon, 'type', valueSelect); //trae la funcion y se le mandan los datos pero se especifica los datos
  console.log(filterPokemon);
  list.innerHTML = "";
  filterPokemon.forEach(itemPokemon => { //recorre los pokemones de tipo seleccionado y pinta los elementos que va encontrando
    list.appendChild(renderItems(itemPokemon));
    const contador = contadorPokemonTipo(data.pokemon, 'type', valueSelect);
    document.querySelector("#contador").textContent = "Hay "+contador+ " pokemones de tipo " +valueSelect;
  });
});


orderasd.addEventListener("change", () => {
  const selectOrder = orderasd.value;
  const selectFiltrar = select.value;
  const orderData = sortData(data.pokemon, 'name', selectOrder);
  const nuevofiltrar = filterData(data.pokemon, 'type', selectFiltrar);

  let arreglo = [];
  if (selectFiltrar) { // aqui validamos si el select tiene algo
    filterData(orderData, "type", selectFiltrar) // filtra los datos ordenados por nombre ya sea ascendente o desdencente y los filtra por tipo
    arreglo = sortData(nuevofiltrar, "name", selectOrder) // ordena los datos filtrados y los guarda en un 
    list.innerHTML = "";
    arreglo.forEach((a, b) => {
      list.appendChild(renderItems(a, b));
    });
  }
  else {
    list.innerHTML = "";
    orderData.forEach((a, b) => {
      list.appendChild(renderItems(a, b));
    });
  }
});

//carga los elementos de tarjetas al inicio de la pagina
data.pokemon.forEach((pokemon) => {
  const todos = data.pokemon.length;
  document.querySelector("#contador").textContent = "Hay un total de "+todos+" pokemon analizados";
  list.appendChild(renderItems(pokemon));
});



btnBuscar.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const searchPokemon = search(data, name);
  if (searchPokemon) {
    list.innerHTML = "";
    list.appendChild(renderItems(searchPokemon));
  } else {
    // El Pokémon buscado no existe.
    alert(`No se encontró el Pokémon "${name}". Intenta de nuevo.`);
  }
});


btnStatistic.addEventListener("click", function () {
  const selecFilter = select.value;
  const filter = filterData(data.pokemon, 'type', selecFilter);
  
  const bestPokemon = selecFilter ? computeStats(filter): computeStats(data.pokemon)
  list.innerHTML = "";
  list.appendChild(renderItems(bestPokemon));
});

btnStatisticDebil.addEventListener("click", function (event) {
  console.log('ver el evento target', event.target)
  const selecFilter = select.value;
  const filter = filterData(data.pokemon, 'type', selecFilter);
  const debilPokemon = selecFilter ? statsPokemonDebil(filter): statsPokemonDebil(data.pokemon)
  list.innerHTML = "";
  list.appendChild(renderItems(debilPokemon));
});



limpiar.addEventListener("click", function () {
  select.value = "";
  orderasd.value = "";
  list.innerHTML = "";
  document.querySelector("#contador").textContent = "";
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



