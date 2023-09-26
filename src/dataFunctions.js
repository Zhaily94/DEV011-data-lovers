

export const search = (data, name) => {
  for (const pokemon of data.pokemon) { //Por cada elemento en la colección data.pokemon, asigna ese elemento a la variable pokemon y ejecuta el bloque de código entre las llaves
    if (pokemon.name === name) {
      // console.log(pokemon);
      return pokemon;
    }
  }
}

// export const filter = (data, type) => {
//   const filteredPokemon = data.pokemon.filter(pokemon => pokemon.type.includes(type)); //de todos los datos pokemon filtra por tipo que coincida con el tipo
//   return filteredPokemon; //retorna todos los pokemones filtrados
// };

export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(itemPokemon => itemPokemon[filterBy].includes(value));
  return filteredData;
};
