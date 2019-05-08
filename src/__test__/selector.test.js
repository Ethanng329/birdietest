import { getUniquelist, filteredTable } from '../selector';

describe('selectors functions properly', () => {
  test('get unique array functions as expected', () => {
    const filterType = 'education';
    const dummyArrayObject = [
      { education: 'school', something: 'something' },
      { education: 'uni', something: 'something' },
      { education: 'school', something: 'something' }
    ];

    expect(getUniquelist(dummyArrayObject, filterType)).toEqual([
      'school',
      'uni'
    ]);
  });

  test('filter display data properly', () => {
    const dummyData = [
      { age: 1, education: 'university' },
      { age: 51, education: 'university' },
      { age: 3, education: 'university' },
      { age: 1, education: 'high school' },
      { age: 10, education: 'no school' }
    ];
    const filterType = 'education';

    const expected = [
      { age: '18.3', count: 3, item: 'university' },
      { age: '1.0', count: 1, item: 'high school' },
      { age: '10.0', count: 1, item: 'no school' }
    ];

    expect(filteredTable(dummyData, filterType)).toEqual(expected);
  });
});
