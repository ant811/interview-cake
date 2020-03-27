const { highestProductOf3 } = require('./highestProductOfThree');

test('Returns highest product of three numbers', () => {
  expect(highestProductOf3([1, 2, 3, 4])).toEqual(24);
  expect(highestProductOf3([6, 1, 3, 5, 7, 8, 2])).toEqual(336);
  expect(highestProductOf3([-5, 4, 8, 2, 3])).toEqual(96);
  expect(highestProductOf3([-10, 1, 3, 2, -10])).toEqual(300);
  expect(highestProductOf3([-5, -1, -3, -2])).toEqual(-6);
  const err1 = () => { highestProductOf3([]) };
  expect(err1).toThrow(Error);
  const err2 = () => { highestProductOf3([1]) };
  expect(err2).toThrow(Error);
  const err3 = () => { highestProductOf3([1, 2]) };
  expect(err3).toThrow(Error);
});
