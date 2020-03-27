const { getMaxProfit } = require('./appleStocks');

test('Returns maximal profit', () => {
  expect(getMaxProfit([1, 5, 3, 2])).toEqual(4);
  expect(getMaxProfit([7, 2, 8, 9])).toEqual(7);
  expect(getMaxProfit([1, 6, 7, 9])).toEqual(8);
  expect(getMaxProfit([9, 7, 4, 1])).toEqual(-2);
  expect(getMaxProfit([1, 1, 1, 1])).toEqual(0);
  const err1 = () => { getMaxProfit([]) }
  expect(err1).toThrow(Error);
  const err2 = () => { getMaxProfit([1]) }
  expect(err2).toThrow(Error);
});
