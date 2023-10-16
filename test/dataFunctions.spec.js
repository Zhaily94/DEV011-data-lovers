import {  sortData,computeStats, filterData, statsPokemonDebil, contadorPokemonTipo, search} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('search', () => {
  it('muestra el nombre si coincide', () => {
    const data = {
      pokemon: [
        {
          name: 'Pikachu',
          num: 25,
        },
      ],
    };
    const result = search(data, 'pikachu');
    expect(result).toEqual({
      name: 'Pikachu',
      num: 25,
    });
  });
  it('muestra el numero de pokemon si coincide', () => {
    const data = {
      pokemon: [
        {
          name: 'Pikachu',
          num: 25,
        },
      ],
    };
    const result = search(data, 25);
    expect(result).toEqual({
      name: 'Pikachu',
      num: 25,
    });
  });
  it('regresa la alert', () => {
    const data = {
      pokemon: [
        {
          name: 'Pikachu',
          num: 25,
        },
      ],
    };
    const result = search(data, 'Bulbasaur');
    expect(result).toBeUndefined();
  });
});


describe('sortData', () => { // aqui se realiza una descripcion del el test de ordenar datos 

  it('La funcion es aplicada a un array de datos', () => {
    const sortedData = sortData(fakeData, 'name', 'asc');  // Realizamos una variable que traera la respuesta de la funcion donde recibe tres parametros
    expect(sortedData).toBeInstanceOf(Array); // verifica que la respuesta de la funcion sea de tipo array 
  });
  it('Los datos deben de estar ordenados de forma ascendente', () => {
    const sortedData = sortData(fakeData, 'name', 'asc'); // la funcion con sus argumentos es guardada en una variable
    expect(sortedData[0].name).toBe('bulbasaur'); // asegura que el elemento 0 sea bulbasaur
    expect(sortedData[sortedData.length - 1].name).toBe('venusaur'); // // espera que el ultimo elemento sea venusaur
  });
  it('Los datos deben de estar ordenados de forma descendente', () => {
    const sortedData = sortData(fakeData, 'name', 'desc');
    expect(sortedData[0].name).toBe('venusaur');
    expect(sortedData[sortedData.length - 1].name).toBe('bulbasaur');
  });
  it('No debe de modificar el arreglo original, solo debe devolver una copia ordenada de los datos', () => {
    const originalData = [...fakeData];
    sortData(fakeData, 'name', 'asc');
    expect(fakeData).toEqual(originalData);
  });
});

describe('computeStats', () => { // analiza la funcion de estadistica

  it('Debe de retornar el pokemon con el estado de ataque mas alto o el primero que encuentre con el mismo ataque mayor', () => {
    const fakeDataWithEqualAttackStats = [
      {
        name: 'Bulbasaur',
        stats: {
          "base-attack": 118,
        },
      },
      {
        name: 'Charmander',
        stats: {
          "base-attack": 116,
        },
      },
    ];
    const pokemonWithHighestAttackStat = computeStats(fakeDataWithEqualAttackStats);
    expect(pokemonWithHighestAttackStat).toEqual({
      name: 'Bulbasaur',
      stats: {
        "base-attack": 118,
      },
    });
  });
});

describe('statsPokemonDebil', () => { // analiza la funcion de estadistica mostrando el mas debil

  it('Debe de retornar el pokemon con el estado de ataque mas bajo o el primero que encuentre con el mismo ataque bajo', () => {
    const fakeDataWithEqualAttack = [
      {
        name: 'Bulbasaur',
        stats: {
          "base-attack": 118,
        },
      },
      {
        name: 'Charmander',
        stats: {
          "base-attack": 116,
        },
      },
    ];
    const pokemonWithLowtAttack = statsPokemonDebil(fakeDataWithEqualAttack);
    expect(pokemonWithLowtAttack).toEqual({
      name: 'Charmander',
      stats: {
        "base-attack": 116,
      },
    });
  });
});



describe('filterData', () => {

  it('La funcion es aplicada a un array de datos', () => {
    const filteredData = filterData(fakeData, 'type', 'grass');  // Realizamos una variable que traera la respuesta de la funcion donde recibe tres parametros
    expect(filteredData).toBeInstanceOf(Array); // verifica que la respuesta de la funcion sea de tipo array 
  });
  
  it('should filter the data by the given filterBy and value', () => {
    const data = [
      {
        name: 'Bulbasaur',
        type: 'grass',
      },
      {
        name: 'Charmander',
        type: 'fire',
      },
      {
        name: 'Squirtle',
        type: 'water',
      },
    ];
    const filteredData = filterData(data, 'type', 'grass');
    expect(filteredData).toEqual([
      {
        name: 'Bulbasaur',
        type: 'grass',
      },
    ]);
  });
  it('Deberia devolver una matriz vacia si ningun dato coincide con el valor y filtro dados', () => {
    const data = [
      {
        name: 'Bulbasaur',
        type: 'grass',
      },
      {
        name: 'Charmander',
        type: 'fire',
      },
      {
        name: 'Squirtle',
        type: 'water',
      },
    ];
    const filteredData = filterData(data, 'type', 'flying');
    expect(filteredData).toEqual([]);
  })
})

describe('contadorPokemonTipo', () => { // cuenta los pokemones segun su tipo

  it('Debe de retornar el total de pokemones de tipo fairy', () => {
    const dataType = [
      {
        name: 'cleffa',
        type: 'fairy',
      },
      {
        name: 'igglybuff',
        type: 'fairy',
      },
      {
        name: 'togepi',
        type: 'fairy',
      },
      {
        name: 'togetic',
        type: 'fairy',
      },
      {
        name: 'marill',
        type: 'fairy',
      },
      {
        name: 'azumarill',
        type: 'fairy',
      },
      {
        name: 'snubbull',
        type: 'fairy',
      },
      {
        name: 'granbull',
        type: 'fairy',
      },
      
    ];
    const contadorPokemon = contadorPokemonTipo(dataType, 'type', 'fairy');
    expect(contadorPokemon).toEqual(8);
  });
});

