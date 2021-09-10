import axios from 'axios';

describe('Api relationship module', () => {
  it(
    '1. verifies the  Categories action method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => res);
      expect(data).toBeInstanceOf(Object);
    },
  );

  it(
    '2. verifies the get one Caetegory info method',
    async () => {
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res => res);
      expect(data).toBeInstanceOf(Object);
    },
  );
});
