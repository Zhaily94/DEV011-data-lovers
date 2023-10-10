
export const renderItems = (pokemon) => {

  if (pokemon) {
    const ul = document.createElement('ul');
    ul.setAttribute('itemtype', 'ul-content');

    const li = document.createElement('li');
    li.classList.add('tarjeta-pokemon');
    li.setAttribute('itemtype', 'pokemon');
    li.setAttribute('itemscope', '');

    const card = document.createElement('div');
    card.style.backgroundColor = backgroundColor(pokemon.type[0]);
    card.classList.add('card');

    // const cardImg = document.createElement('div');
    // card.classList.add('cardImg');

    const img = document.createElement('img');
    img.classList.add('img-avatar');
    img.setAttribute('itemprop', 'img');
    img.src = pokemon.img;
    card.appendChild(img);

    const container = document.createElement('div');
    container.setAttribute('itemscope', '');
    container.setAttribute('itemtype', 'container-pokemon');
    container.classList.add('container');
    card.appendChild(container);
    
    const containerName = document.createElement('dl');
    containerName.setAttribute('itemtype', 'container-name-pokemon');
    containerName.classList.add('containerName');
    container.appendChild(containerName);

    const numero = document.createElement('dt');
    numero.setAttribute('itemprop', 'num');
    numero.textContent = "N.º" + pokemon.num;
    containerName.appendChild(numero);

    const nom = document.createElement('dt');
    nom.setAttribute('itemprop', 'name');
    nom.textContent = pokemon.name;
    containerName.appendChild(nom);

    const containerProp = document.createElement('dl');
    containerProp.classList.add('containerProp');
    card.appendChild(containerProp);

    const tip = document.createElement('dt')
    tip.setAttribute('itemprop', 'type');
    tip.textContent = "Tipo: ";
    containerProp.appendChild(tip);
 
    const tipo = document.createElement('dt')
    tipo.setAttribute('itemprop', 'type');
    tipo.textContent = pokemon.type;
    tipo.classList.add('class-tipo');
    tipo.style.backgroundColor = backgroundColor(pokemon.type[0]);
    containerProp.appendChild(tipo);

    const gen = document.createElement('dt')
    gen.setAttribute('itemprop', 'generation');
    gen.textContent = "Generacion: ";
    containerProp.appendChild(gen);
    const generation = document.createElement('dt');
    if (pokemon.generation) {
      generation.textContent = pokemon.generation.num;
    }
    containerProp.appendChild(generation);


    const reg = document.createElement('dt')
    reg.setAttribute('itemprop', 'region');
    reg.textContent = "Region: ";
    containerProp.appendChild(reg);

    const region = document.createElement('dt');
    if (pokemon.generation) {
      region.textContent = pokemon.generation.name;
    }
    containerProp.appendChild(region);

   

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
    ul.appendChild(li);
    return ul;
  }
}

export const backgroundColor = (type) => {
  switch (type) {
  case "normal":
    return "#e4bdff";
  case "fire":
    return "#dc8b51";
  case "water":
    return "#00ffff";
  case "electric":
    return "#ffff00";
  case "grass":
    return "#2ac6ba";
  case "ice":
    return "#88cbc6";
  case "fighting":
    return "#ff00ff";
  case "poison":
    return "#0000ff";
  case "tierra":
    return "#9d38bd";
  case "flying":
    return "#000000";
  case "psychic":
    return "#f4bad5";
  case "ghost":
    return "#000000";
  case "dragon":
    return "#ff0000";
  case "bug":
    return "#9d38bd";
  case "rock":
    return "#686995";
  case "fairy":
    return "#ffffff";
  case "ground":
    return "#e8cba8";
  case "steel":
    return "#bae4c8";
  case "dark":
    return "#95a0b0";
  default:
    return "#ffffff";
  }
}

