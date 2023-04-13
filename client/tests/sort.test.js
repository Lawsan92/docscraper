const Sort = require('../../sort.js');

test('sorts array of strings alphabetically', () => {
  const sort = new Sort;
  let array = ['ABA', 'BCB', 'AAB', 'BBC', 'BAC', 'ABC'];
  let result = ['AAB', 'ABA', 'ABC', 'BAC', 'BBC', 'BCB'];
  expect((sort.alphabet(array))).toStrictEqual(result);
});