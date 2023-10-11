
import { filterData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
// sortData, computeStats 

const POKEMON_TYPE_GRASS = [
  {
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
  },

  {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "poison"
    ],
  }
]


describe('filterData()', () => {
  it('Debera filtrar los datos obtenidos por tipo grass', () => {
    const filteredData = filterData(fakeData, 'type', 'grass');
    expect(filteredData).toEqual(POKEMON_TYPE_GRASS);
  });
});

