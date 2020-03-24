const { cafeOrderChecker } = require('./cafeOrderChecker');

test('Returns true when no order is served before a previously placed order, else returns false', () => {
  let takeOut1 = [1, 3, 5];
  let dineIn1 = [2, 4, 6];
  let served1 = [1, 2, 4, 6, 5, 3];
  expect(cafeOrderChecker(takeOut1, dineIn1, served1)).toBe(false);
  let served2 = [1, 2, 3, 5, 4, 6];
  expect(cafeOrderChecker(takeOut1, dineIn1, served2)).toBe(true);
});

test('Returns false when orders are not served', () => {
  let takeOut1 = [1, 3, 5];
  let dineIn1 = [2, 4, 6];
  let served3 = [1, 2, 3, 5, 4];
  expect(cafeOrderChecker(takeOut1, dineIn1, served3)).toBe(false);
  let takeOut2 = [1, 3, 5, 7];
  let dineIn2 = [2, 4, 6];
  let served4 = [1, 2, 3, 5, 4, 6];
  expect(cafeOrderChecker(takeOut2, dineIn2, served4)).toBe(false);
});
