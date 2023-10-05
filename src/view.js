export const renderItems = (pokemon) => {

  if (pokemon) {
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
    img.src = pokemon.img;
    container.appendChild(img);

    const nom = document.createElement('dt');
    nom.setAttribute('itemprop', 'name');
    nom.textContent = pokemon.name;
    container.appendChild(nom);

    const numero = document.createElement('dt');
    numero.textContent = "#"+ pokemon.num;
    container.appendChild(numero);

    const tip =document.createElement('dt')
    tip.setAttribute('itemprop', 'type');
    tip.textContent ="Tipo: "+ pokemon.type;
    tip.classList.add('class-tipo');
    container.appendChild(tip);

    li.appendChild(card);
    return li;
  }
}

