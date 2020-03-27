function findRotationPoint(words) {
  let point = -1;
  
  if (words.length < 3) {
    if (words[0] > words[1]) {
      return 1;
    } else {
      return point;
    }
  }

  let start = 0;
  let finish = words.length - 1;
  while (start < finish) {
    let midPoint = Math.ceil((finish + start) / 2);
    if (words[midPoint - 1] > words[midPoint]) {
      point = midPoint;
      break;
    } else if (words[midPoint] > words[start]) {
      start = midPoint;
    } else {
      finish = midPoint;
    }
  }

  return point;
}

// Time complexity: O(log(n))
// Space complexity: O(1)

module.exports = { findRotationPoint };
