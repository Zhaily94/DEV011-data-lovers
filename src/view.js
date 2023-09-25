export const renderItems = (pokemon) => {
  const ul = document.createElement('ul');
  ul.classList.add('lista');

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
    nom.textContent = pokemon.name;
    container.appendChild(nom);


    // const name = document.createElement('dd');
    // name.setAttribute('itemprop', 'name');
    // name.classList.add('class-nombre');
    // name.textContent = pokemon.name;
    // container.appendChild(name);

    // const num = document.createElement('dt');
    // num.textContent = "Num: ";
    // container.appendChild(num);

    // const id = document.createElement('dd');
    // id.setAttribute('itemprop', 'num');
    // id.classList.add('class-id');
    // id.textContent = "00" + pokemon.id;
    // container.appendChild(id);

    // const typ = document.createElement('dt');
    // typ.textContent = "Type: ";
    // container.appendChild(typ);

    // const type = document.createElement('dd');
    // type.setAttribute('itemprop', 'type');
    // type.classList.add('class-tipo');
    // type.textContent = pokemon.types[0].type.name;
    // container.appendChild(type);

    li.appendChild(card);
    ul.appendChild(li);

  }
  return ul;

}
