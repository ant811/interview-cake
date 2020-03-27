function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let random = getRandom(i, array.length - 1);
    [ array[i], array[random] ] = [ array[random], array[i] ];
  }

  return array;
}

// Time complexity: O(n)
// Space complexity: O(1)
