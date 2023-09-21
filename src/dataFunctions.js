export const request = (url, name) => {
  fetch(url + name)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return response.json(); // Parsea la respuesta a JSON
    })
    .then(data => {
      createPokemon (data);
    })
    .catch(error => {
      return error;
    });
}

export const createPokemon = (pokemon) => {
  if(pokemon){
    const pokemonLista = document.querySelector(".lista");
    const card = document.createElement('li');
    card.classList.add('tarjeta-pokemon');
  
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');
  
    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default;
    tarjeta.appendChild(imagen);
    card.appendChild(tarjeta);
  
    const caracteristicas = document.createElement('div');
    caracteristicas.classList.add('container');
    card.appendChild(caracteristicas);
  
    const nombre = document.createElement('h4');
    nombre.classList.add('class-nombre'); 
    nombre.textContent = pokemon.nombre;
    caracteristicas.appendChild(nombre);
  
  
  
    const tipo = document.createElement('p');
    tipo.classList.add('class-tipo');
    caracteristicas.appendChild(tipo);
  
    pokemonLista.appendChild(card);
  
  }

}

