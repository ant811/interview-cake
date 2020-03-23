const reverseInPlace = (chars) => {
  let midPoint = Math.floor(chars.length / 2);
  let len = chars.length - 1;
  for (let i = 0; i < midPoint; i++) {
    [ chars[i], chars[len - i] ] = [ chars[len - i], chars[i] ];
  }
  
  return chars;
};

// Time complexity: O(n)
// Space complexity: O(1)

module.exports = { reverseInPlace };
