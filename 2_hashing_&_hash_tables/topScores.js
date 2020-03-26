function sortScores(unorderedScores, highestPossibleScore) {
  let scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  const orderedScores = [];

  for (let i = 0; i < unorderedScores.length; i++) {
    scoreCounts[unorderedScores[i]]++;
  }
  
  for (let i = highestPossibleScore; i >= 0; i--) {
    let counts = scoreCounts[i];
    while (counts > 0) {
      orderedScores.push(i);
      counts--;
    }
  }

  return orderedScores;
}

// Time complexity: O(n)
// Space complexity: O(n)

// NOTE: 
// highestPossibleScore is treated as a constant
// Else space/time could be considered O(n + m)

module.exports = { sortScores };
