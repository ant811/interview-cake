function findRepeat(numbers) {
  let floor = 1;
  let ceil = numbers.length - 1;
  while (floor < ceil) {
    let midPoint = Math.floor(floor + ((ceil - floor) / 2));
    let firstHalfFloor = floor;
    let firstHalfCeil = midPoint;
    let latterHalfFloor = midPoint + 1;
    let latterHalfCeil = ceil;
    let potentialInts = firstHalfCeil - firstHalfFloor + 1;
    let found = 0;
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num >= firstHalfFloor && num <= firstHalfCeil) {
        found++;
      }
    }

    if (found > potentialInts) {
      floor = firstHalfFloor;
      ceil = firstHalfCeil;
    } else {
      floor = latterHalfFloor;
      ceil = latterHalfCeil;
    }
  }

  return floor;
}

// Time complexity: O(n * log(n))
// Space complexity: O(1)

module.exports = { findRepeat };
