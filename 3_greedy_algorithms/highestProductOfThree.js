function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new error('Array must contain 3 or more numbers');
  }
  
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  for (let i = 2; i < arrayOfInts.length; i++) {
    let num = arrayOfInts[i];
    highestProductOf3 = Math.max(num * highestProductOf2, num * lowestProductOf2, highestProductOf3);
    highestProductOf2 = Math.max(num * lowest, num * highest, highestProductOf2);
    lowestProductOf2 = Math.min(num * lowest, num * highest, lowestProductOf2);
    lowest = Math.min(num, lowest);
    highest = Math.max(num, highest);
  }

  return highestProductOf3;
}

// Time complexity: O(n)
// Space complexity: O(1)

module.exports = { highestProductOf3 };
