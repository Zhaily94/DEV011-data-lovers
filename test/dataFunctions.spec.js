import {  sortData,computeStats, filterData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('sortData', () => { // aqui se realiza una descripcion del el test de ordenar datos 

  it('La funcion es aplicada a un array de datos', () => {
    const sortedData = sortData(fakeData, 'name', 'asc');  // Realizamos una variable que traera la respuesta de la funcion donde recibe tres parametros
    expect(sortedData).toBeInstanceOf(Array); // verifica que la respuesta de la funcion sea de tipo array 
  });
  it('Los datos estan ordenados de forma ascendente', () => {
    const sortedData = sortData(fakeData, 'name', 'asc');
    expect(sortedData[0].name).toBe('bulbasaur');
    expect(sortedData[sortedData.length - 1].name).toBe('venusaur');
  });
  it('Los datos estan ordenados de forma descendente', () => {
    const sortedData = sortData(fakeData, 'name', 'desc');
    expect(sortedData[0].name).toBe('venusaur');
    expect(sortedData[sortedData.length - 1].name).toBe('bulbasaur');
  });
  it('Ordena los datos sin usar filtro', () => {
    const originalData = [...fakeData];
    sortData(fakeData, 'name', 'asc');
    expect(fakeData).toEqual(originalData);
  });
});

describe('computeStats', () => { // analiza la funcion de estadistica
  it('should return the Pokémon with the highest attack stat, or the first one if they have the same attack stat', () => {
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
  it('should return an empty array if no data matches the given filterBy and value', () => {
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