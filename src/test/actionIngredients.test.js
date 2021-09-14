import axios from 'axios';

describe('Api relationships module', () => {
  it(
    '1. verifies the get Categories method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878').then(res => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
