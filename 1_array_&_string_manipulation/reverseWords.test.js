const { reverseWords } = require('./reverseWords');

test('Returns in-place array of words in reverse order', () => {
  let arr = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
  expect(reverseWords(arr).join('')).toEqual('steal pound cake');
  expect(reverseWords(arr)).toBe(arr);
  let arr1 = ['c', 'r', 'e', 'a', 'm', ' ', 'i', 'c', 'e', ' ', 'v', 'a', 'n', 'i', 'l', 'l', 'a', ' ', 'm', 'e', 'l', 't'];
  expect(reverseWords(arr1).join('')).toEqual('melt vanilla ice cream');
  expect(reverseWords(arr1)).toBe(arr1);
  let arr2 = ['c', 'u', 'p', 'c', 'a', 'k', 'e', 's', ' ', 'h', 'i', 'd', 'e'];
  expect(reverseWords(arr2).join('')).toEqual('hide cupcakes');
  expect(reverseWords(arr2)).toBe(arr2);
});
