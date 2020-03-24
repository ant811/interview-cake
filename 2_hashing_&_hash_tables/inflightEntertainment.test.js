const { inflightEntertainment } = require('./inflightEntertainment');

test('Returns true when array of movie times contains two integers that equal flight time', () => {
  let flight1 = 150;
  let times1 = [90, 45, 50, 55, 60];
  expect(inflightEntertainment(flight1, times1)).toBe(true);
  let flight2 = 165;
  let times2 = [90, 45, 50, 55, 60];
  expect(inflightEntertainment(flight2, times2)).toBe(false);
  let flight3 = 180;
  let times3 = [90, 45, 80, 50, 55, 60];
  expect(inflightEntertainment(flight3, times3)).toBe(false);
});
