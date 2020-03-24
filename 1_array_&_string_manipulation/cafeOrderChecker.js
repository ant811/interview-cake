const cafeOrderChecker = (takeOut, dineIn, served) => {
  let indexTO = 0;
  let indexDI = 0;
  let result = true;

  for (let i = 0; i < served.length; i++) {
    if (served[i] === takeOut[indexTO]) {
      indexTO++;
    } else if (served[i] === dineIn[indexDI]) {
      indexDI++;
    } else {
      result = false;
      break;
    }
  }

  if (indexTO < takeOut.length || indexDI < dineIn.length) {
    result = false;
  }

  return result;
}

// Time complexity: O(n)
// Space complexity: O(1)

module.exports = { cafeOrderChecker };
