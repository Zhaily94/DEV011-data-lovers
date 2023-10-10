export function search(data, name) {
  for (const pokemon of data.pokemon) { //hace una variable que itera la data
    const mayusculas = pokemon.name.toLowerCase(); //ignora la diferencia de mayusculas o minusculas
    const numero = parseInt(pokemon.num, 10); //se almacena el numero de pokemon y convierte el string en un entero base 10
    const nombreNumero = parseInt(name, 10);//asigna el valor del string name a la variable nombreNumero como un número entero en base 10.
    //este if comprueba si el nombre , el numero  y el numero en base 10 coincide con el pokemon
    if (mayusculas === name.toLowerCase() || numero === name || numero === nombreNumero) {
      return pokemon;
    }
  }
}

export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(itemPokemon => itemPokemon[filterBy].includes(value));
  return filteredData;
};


export function sortData(data, sortBy, sortOrder) {
  let copia = [];
  const fakeData = [...data];
  if (sortOrder === 'asc') {
    copia = fakeData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === 'desc') {
    copia = fakeData.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  return copia;
}

export function computeStats(data) {
  let pokemonAttack = [];
  const fakeData = [...data];
  pokemonAttack = fakeData.reduce((pokemonAnterior, pokemonActual) => {
    return parseInt(pokemonActual.stats["base-attack"]) >= parseInt(pokemonAnterior.stats["base-attack"]) ? pokemonActual : pokemonAnterior;
  }, { stats: { "base-attack": 0 } });

  return pokemonAttack;
}

export function statsPokemonDebil(data) {
  let pokemonAttack = [];
  const fakeData = [...data];
  pokemonAttack = fakeData.reduce((pokemonAnterior, pokemonActual) => {
    return parseInt(pokemonActual.stats["base-attack"]) <= parseInt(pokemonAnterior.stats["base-attack"]) ? pokemonActual : pokemonAnterior;
  }, { stats: { "base-attack": 300 } });

  return pokemonAttack;
}


export function contadorPokemonTipo(data, filterBy, value) {
  const contar = filterData(data,filterBy,value);
  return contar.map(itemPokemon => itemPokemon[filterBy]).length
}

