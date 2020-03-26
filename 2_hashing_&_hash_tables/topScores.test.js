const { sortScores } = require('./topScores');

test('Returns sorted array of highest to lowest scores', () => {
  expect(sortScores([], 100)).toEqual([]);
  expect(sortScores([55], 100)).toEqual([55]);
  expect(sortScores([30, 60], 100)).toEqual([60, 30]);
  expect(sortScores([37, 89, 41, 65, 91, 53], 100)).toEqual([91, 89, 65, 53, 41, 37]);
  expect(sortScores([20, 10, 30, 30, 10, 20], 100)).toEqual([30, 30, 20, 20, 10, 10]);
});
