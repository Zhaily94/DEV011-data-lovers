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
    const li = document.createElement('li');
    li.classList.add('tarjeta-pokemon');
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const container = document.createElement('dl');
    container.setAttribute('itemscope', '');
    container.setAttribute('itemtype', 'pokemon');
    container.classList.add('container');
    card.appendChild(container);

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    container.appendChild(img);
   
    const nom = document.createElement('dt');
    nom.textContent = "Name: ";
    container.appendChild(nom);

  
    const name = document.createElement('dd');
    name.setAttribute('itemprop', 'name');
    name.classList.add('class-nombre'); 
    name.textContent = pokemon.name;
    container.appendChild(name);

    const num = document.createElement('dt');
    num.textContent = "Num: ";
    container.appendChild(num);

    const id = document.createElement('dd');
    id.setAttribute('itemprop', 'num');
    id.classList.add('class-id'); 
    id.textContent = "00"+pokemon.id;
    container.appendChild(id);
  
    const typ = document.createElement('dt');
    typ.textContent = "Type: ";
    container.appendChild(typ);

    const type = document.createElement('dd');
    type.setAttribute('itemprop', 'type');
    type.classList.add('class-tipo');
    type.textContent = pokemon.types[0].type.name;
    container.appendChild(type);
  
    li.appendChild(card);
    pokemonLista.appendChild(li);
  
  }

}

