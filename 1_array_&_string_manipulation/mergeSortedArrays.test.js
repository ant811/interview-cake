const { mergeArrays } = require('./mergeSortedArrays');

test('Returns merged array from two sorted arrays', () => {
  let arr1 = [3, 4, 6, 10, 11, 15];
  let arr2 = [1, 5, 8, 12, 14, 19];
  expect(mergeArrays(arr1, arr2)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
  let arr3 = [1, 5, 8, 12, 14, 19];
  let arr4 = [3, 4, 6, 10, 11, 15];
  expect(mergeArrays(arr3, arr4)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
  let arr5 = [1];
  let arr6 = [3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
  expect(mergeArrays(arr5, arr6)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
  let arr7 = [3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
  let arr8 = [1];
  expect(mergeArrays(arr7, arr8)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
  let arr9 = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
  let arr10 = [];
  expect(mergeArrays(arr9, arr10)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
  let arr11 = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
  let arr12 = [];
  expect(mergeArrays(arr11, arr12)).toEqual([ 1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19 ]);
});
