
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

export const sortData = (filteredData, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    filteredData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === 'desc') {
    filteredData.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  console.log(filteredData);
  return filteredData;
};


// export const sortAndFilterData = (data, filterBy, value, sortBy, sortOrder) => {
//   const filteredData = filterData(data, filterBy, value);
//   if (sortOrder === 'asc') {
//     filteredData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
//   } else if (sortOrder === 'desc') {
//     filteredData.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
//   }
//   console.log(filteredData);
//   return filteredData;
// };