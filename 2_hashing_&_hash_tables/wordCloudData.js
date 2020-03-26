const isLetter = (char) => {
  let isLetter = false;
  if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
    isLetter = true;
  }  

  return isLetter;
}

const populateWordsToCounts = (inputString) => {
  const result = new Map();
  //const words = [];
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    let letter = isLetter(char);
    if (inputString[i + 1] === undefined) {
      if (letter) {
        let word = inputString.slice(startIndex);
        addWordToMap(result, word);
        // words.push(inputString.slice(startIndex))
      } else {
        let word = inputString.slice(startIndex, endIndex);
        addWordToMap(result, word);
        // words.push(inputString.slice(startIndex, endIndex))
      }    
    } else {
      if (letter) {
        endIndex++;
      } else if ((char === '-' || char === '\'') && isLetter(inputString[i + 1]) && isLetter(inputString[i - 1])) {
        endIndex++;
      } else {
        if (isLetter(inputString[i - 1])) {
          let word = inputString.slice(startIndex, endIndex);
          addWordToMap(result, word);
          // words.push(inputString.slice(startIndex, endIndex));
          endIndex++;
          startIndex = endIndex;
        } else {
          startIndex++;
          endIndex++;
        }
      }
    }
  }
  
  // NOTE:
  // I originally iterated through storage array of words, but having an additional
  // data structure, other than result map, increases space complexity
    
    // words.forEach( (word) => {
    //     let first = word[0].toLowerCase();
    //     let lowerCaseWord = first + word.slice(1)
    //     if(result.has(lowerCaseWord)) {
    //       result.set(lowerCaseWord, result.get(lowerCaseWord) + 1)
    //     } else {
    //       result.set(lowerCaseWord, 1)
    //     }
    // })

  // Updated: adding words to map without storing words in an array
  function addWordToMap(result, word) {
    let first = word[0].toLowerCase();
    let lowerCaseWord = first + word.slice(1);
    if(result.has(lowerCaseWord)) {
      result.set(lowerCaseWord, result.get(lowerCaseWord) + 1);
    } else {
      result.set(lowerCaseWord, 1);
    }
  }

  return result;
}

// Time complexity: O(n)
// Space complexity: O(n)

// NOTE:
// Official solution cleverly organized code into a class, tying methods together


// UPDATE:  Refactored solution into class

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    let startIndex = 0;
    let endIndex = 0;
    for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      let letter = this.isLetter(char);
      if (inputString[i + 1] === undefined) {
        if (letter) {
          let word = inputString.slice(startIndex);
          this.addWordToMap(word);
        } else {
          let word = inputString.slice(startIndex, endIndex);
          this.addWordToMap(word);
        }    
      } else {
        if (letter) {
          endIndex++;
        } else if ((char === '-' || char === '\'') && this.isLetter(inputString[i + 1]) && this.isLetter(inputString[i - 1])) {
          endIndex++;
        } else {
          if (this.isLetter(inputString[i - 1])) {
            let word = inputString.slice(startIndex, endIndex);
            this.addWordToMap(word);
            endIndex++;
            startIndex = endIndex;
          } else {
            startIndex++;
            endIndex++;
          }
        }
      }
    }
  }

  isLetter(char) {
    let isLetter = false;
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
      isLetter = true;
    }  
  
    return isLetter;
  }

  addWordToMap(word) {
    let first = word[0].toLowerCase();
    let lowerCaseWord = first + word.slice(1);
    if (this.wordsToCounts.has(lowerCaseWord)) {
      this.wordsToCounts.set(lowerCaseWord, this.wordsToCounts.get(lowerCaseWord) + 1);
    } else {
      this.wordsToCounts.set(lowerCaseWord, 1);
    }
  }
}

module.exports = { populateWordsToCounts, WordCloudData };
