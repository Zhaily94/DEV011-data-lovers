
let filteredData;

export const search = (data, name) => {
  for (const pokemon of data.pokemon) { //Por cada elemento en la colección data.pokemon, asigna ese elemento a la variable pokemon y ejecuta el bloque de código entre las llaves
    if (pokemon.name === name) {
      // console.log(pokemon);
      return pokemon;
    }
  }
}

export const filterData = (data, filterBy, value) => {
  filteredData = data.filter(itemPokemon => itemPokemon[filterBy].includes(value));
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
