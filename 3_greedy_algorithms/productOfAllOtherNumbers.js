function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Array must contain two or more integers');
  }

  const result = [];

  // Original Answer:
    // Time complexity: O(n)
    // Space complexity O(n)
      // Solution creates 3 arrays, all with length n
      // O(3n) --> O(n)

  // const forwardProducts = [];
  // const reverseProducts = [];
  
  // for (let i = 0; i < intArray.length; i++) {
  //   if(i === 0) {
  //     forwardProducts.push(intArray[i]);
  //     reverseProducts[intArray.length - 1] = intArray[intArray.length - 1]
  //   } else {
  //     forwardProducts.push(intArray[i] * forwardProducts[i - 1]);
  //     reverseProducts[intArray.length - 1 - i] = intArray[intArray.length - i - 1] * reverseProducts[intArray.length - i];
  //   }
  // }

  // for (let i = 0; i < intArray.length; i++) {
  //   if (i === 0) {
  //     result.push(reverseProducts[1]);
  //   } else if (i === intArray.length - 1) {
  //     result.push(forwardProducts[intArray.length - 2]);
  //   } else {
  //     result.push(forwardProducts[i - 1] * reverseProducts[i + 1]);
  //   }
  // }
  

  // Updated Answer (after reviewing official answer):
    // Time complexity: O(n)
    // Space complexity O(n)
      // Only 1 array with length n created

  let factor = 1;    
  for (let i = 0; i < intArray.length; i++) {
    result.push(factor);
    factor*=intArray[i];
  }

  factor = undefined;
  for (let i = intArray.length - 1; i >=0 ; i--) {
    if (factor === undefined) {
      factor = intArray[i];
    } else {
      result[i]*=factor;
      factor*=intArray[i];
    }
  }  

  return result;
}

module.exports = { getProductsOfAllIntsExceptAtIndex };
