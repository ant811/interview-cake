const { reverseInPlace } = require('./reverseStringInPlace');

test('Returns in-place array of chars in reverse order', () => {
  const arr = ['a'];
  expect(reverseInPlace(arr)).toEqual(['a']);
  expect(reverseInPlace(arr)).toBe(arr);
  const arr1 = ['a', 'b'];
  expect(reverseInPlace(arr1)).toEqual(['b', 'a']);
  expect(reverseInPlace(arr1)).toBe(arr1);
  const arr2 = ['a', 'b', 'c'];
  expect(reverseInPlace(arr2)).toEqual(['c', 'b', 'a']);
  expect(reverseInPlace(arr2)).toBe(arr2);
  const arr3 = ['a', 'b', 'c', 'd'];
  expect(reverseInPlace(arr3)).toEqual(['d', 'c', 'b', 'a']);
  expect(reverseInPlace(arr3)).toBe(arr3);
  const arr4 = ['a', 'b', 'c', 'd', 'e'];
  expect(reverseInPlace(arr4)).toEqual(['e', 'd', 'c', 'b', 'a']);
  expect(reverseInPlace(arr4)).toBe(arr4);
});
