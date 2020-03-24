const mergeArrays = (arr1, arr2) => {
  const result = [];
  let index1 = 0;
  let index2 = 0;
  while(result.length < (arr1.length + arr2.length)) {
    // DRY (Don't repeat yourself)

    if(arr1[index1] === undefined || arr2[index2] < arr1[index1]) {
      result.push(arr2[index2]);
      index2++;
    } else {
      result.push(arr1[index1]);
      index1++;
    } 

    // Original

    // if(arr1[index1] === undefined) {
    //   result.push(arr2[index2]);
    //   index2++;
    // } else if (arr2[index2] === undefined) {
    //   result.push(arr1[index1]);
    //   index1++;
    // } else if(arr1[index1] < arr2[index2]) {
    //   result.push(arr1[index1])
    //   index1++;
    // } else {
    //   result.push(arr2[index2]);
    //   index2++;
    // }
  }

  return result;
};

// Time complexity: O(n)
// Space complexity: O(n)

module.exports = { mergeArrays };
