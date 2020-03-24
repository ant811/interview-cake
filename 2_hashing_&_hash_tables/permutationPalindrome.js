const permutationPalindrome = (str) => {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] = counts[str[i]] + 1 || 1;
  }
  
  let oddOccurrences = 0;
  for (let key in counts) {
    if (counts[key] % 2 === 1) {
      oddOccurrences++;
    }
  }

  if(str.length % 2 === 0) {
    // if length is even, then there can be NO odd occurrences
    if (oddOccurrences === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    // if length is odd, then there can be ONE odd occurrence max
    if (oddOccurrences === 1) {
      return true;
    } else {
      return false;
    }
  }
};

// Time complexity: O(n)
// Space complexity: O(n)

module.exports = { permutationPalindrome };
