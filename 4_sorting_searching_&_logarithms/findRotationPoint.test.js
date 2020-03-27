const { findRotationPoint } = require('./findRotationPoint');

test('Returns index point in array where dictionary lookup returned to beginning of the dictionary', () => {
  expect(findRotationPoint(['cape', 'cake'])).toEqual(1);
  expect(findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple'])).toEqual(4);
  expect(findRotationPoint(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage'])).toEqual(5);
  expect(findRotationPoint(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'zoo', 'asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage'])).toEqual(6);
  expect(findRotationPoint(['cake', 'cape', 'shoe'])).toEqual(-1);
  expect(findRotationPoint(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'yard', 'zoo', 'asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage'])).toEqual(7);
});
