const reverseWords = (message) => {
  const spaces = [0];
  for (let i = 0; i < message.length; i++) {
    if(message[i] === ' ') {
      spaces.push(i + 1);
    }
  }

  spaces.push(message.length + 1);
  let index = 0;
  let space = 0;
  let offset = 0;
  let midWord = Math.floor((spaces[space + 1] - spaces[space] - 1) / 2);
  while (index < message.length) {
    if(index === spaces[space] + midWord) {
      space++;
      index = spaces[space];
      midWord = Math.floor( (spaces[space + 1] - spaces[space] - 1) / 2);
      offset = 0;
    } else {
      [ message[index], message[spaces[space + 1] - 2 - offset] ] = [ message[spaces[space + 1] - 2 - offset], message[index] ];
      offset++;
      index++;
    }
  }

  let messageMid = Math.floor(message.length / 2);
  for (let i = 0; i < messageMid; i++) {
    [ message[i], message[message.length - 1 - i] ] = [ message[message.length - 1 - i], message[i] ];
  }

  return message;
};

// Time complexity: O(n)
// Space complexity: O(1)

module.exports = { reverseWords };
