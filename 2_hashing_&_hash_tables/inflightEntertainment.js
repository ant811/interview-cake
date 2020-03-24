const inflightEntertainment = (flightTime, movieLengths) => {
  const remainingTimes = {};
  let result = false;
  for (let i = 0; i < movieLengths.length; i++) {
    let movieLength = movieLengths[i];
    if (remainingTimes[movieLength] !== undefined) {
      result = true;
      break;
    } 

    remainingTimes[flightTime - movieLength] = true;
  }
  
  return result;
};

// Time complexity: O(n)
// Space complexity: O(n)

module.exports = { inflightEntertainment };
