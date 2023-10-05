export const renderItems = (pokemon) => {

  if (pokemon) {
    const li = document.createElement('li');
    li.classList.add('tarjeta-pokemon');
    li.setAttribute('itemtype', 'pokemon');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('img-avatar');
    img.setAttribute('itemprop', 'img');
    img.src = pokemon.img;
    card.appendChild(img);

    const container = document.createElement('dl');
    container.setAttribute('itemscope', '');
    container.setAttribute('itemtype', 'container-pokemon');
    container.classList.add('container');
    card.appendChild(container);

    const nom = document.createElement('dt');
    nom.setAttribute('itemprop', 'name');
    nom.textContent = pokemon.name;
    container.appendChild(nom);

    const numero = document.createElement('dt');
    numero.textContent = "#" + pokemon.num;
    container.appendChild(numero);

    const gen = document.createElement('dt');
    if (pokemon.generation) {
      gen.textContent = pokemon.generation.num;
    }
    container.appendChild(gen);

    const region = document.createElement('dt');
    if (pokemon.generation) {
      region.textContent = pokemon.generation.name;
    }
    container.appendChild(region);

    const tip = document.createElement('dt')
    tip.setAttribute('itemprop', 'type');
    tip.textContent = "Tipo: " + pokemon.type;
    tip.classList.add('class-tipo');
    container.appendChild(tip);

    const containerHabilities = document.createElement('dl');
    containerHabilities.classList.add('container-habilities');
    card.appendChild(containerHabilities);

    const Habilidades = document.createElement('dt');
    Habilidades.classList.add('class-dt');
    Habilidades.textContent = "Habilidades";
    containerHabilities.appendChild(Habilidades);

    const debilidades = document.createElement('dt');
    debilidades.classList.add('class-dt');
    debilidades.textContent = "Debilidades";
    containerHabilities.appendChild(debilidades);

    li.appendChild(card);
    return li;
  }
}

