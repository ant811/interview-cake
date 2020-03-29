const { getProductsOfAllIntsExceptAtIndex } = require('./productOfAllOtherNumbers');

test('Returns array of products of all numbers except for integer at index of original array', () => {
  expect(getProductsOfAllIntsExceptAtIndex([1, 2, 3])).toEqual([6, 3, 2]);
  expect(getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5])).toEqual([120, 480, 240, 320, 960, 192]);
  expect(getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3])).toEqual([0, 0, 36, 0]);
  expect(getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0])).toEqual([0, 0, 0, 0, 0]);
  const err1 = () => {getProductsOfAllIntsExceptAtIndex([])};
  expect(err1).toThrow(Error);
  const err2 = () => {getProductsOfAllIntsExceptAtIndex([4])};
  expect(err2).toThrow(Error);
});
