const { findRepeat } = require('./findRepeatSpaceEdition');

test('Given an array with length n + 1, with possible integers in the range 1...n, returns repeat integer', () => {
  expect(findRepeat([1, 1])).toEqual(1);
  expect(findRepeat([1, 2, 3, 2])).toEqual(2);
  expect(findRepeat([1, 2, 5, 5, 5, 5])).toEqual(5);
  expect(findRepeat([1, 2, 3, 3, 4, 5])).toEqual(3);
  expect(findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5])).toEqual(4);
});
