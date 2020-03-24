const { permutationPalindrome } = require('./permutationPalindrome');

test('Returns true when any permutation of input string is a palindrome', () => {
  expect(permutationPalindrome('civic')).toBe(true);
  expect(permutationPalindrome('ivicc')).toBe(true);
  expect(permutationPalindrome('civil')).toBe(false);
  expect(permutationPalindrome('livci')).toBe(false);
  expect(permutationPalindrome('hannah')).toBe(true);
  expect(permutationPalindrome('bbaaaaa')).toBe(true);
  expect(permutationPalindrome('bbaaaaab')).toBe(false);
});
