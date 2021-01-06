const letterPositions = function(sentence) {
  const results = {};
  // iterate over sentence
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      if (sentence[i] !== " ") {
        results[sentence[i]] = [i];
      }
    }
  } return results;
};

console.log(letterPositions("lighthouse in the house"));

const eqArrays = function(array1 , array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};

const assertArraysEqual = function(array1 , array2) {
  if (eqArrays(array1 , array2)) {
    console.log(`✅✅✅ Assertion Passed: The arrays are equal!`);
  } else {
    console.log(`❌❌❌ Assertion Failed: The arrays are not equal!`);
  }
};

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
