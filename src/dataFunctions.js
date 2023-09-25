

export const search = (data, name) => {
  for (const pokemon of data.pokemon) { //Por cada elemento en la colección data.pokemon, asigna ese elemento a la variable pokemon y ejecuta el bloque de código entre las llaves
    if (pokemon.name === name) {
      // console.log(pokemon);
      return pokemon;
    }
  }
}

export const filter = (data, type) => {
  for (const pokemon of data.pokemon) {
    if (pokemon.type === type) {
      // console.log(pokemon);
      console.log(pokemon)
      return pokemon;
    }
  }
  console.log('no lo encontre')
  return null;
}

