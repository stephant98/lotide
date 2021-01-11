const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1 , array2) {
  if (eqArrays(array1 , array2)) {
    console.log(`✅✅✅ Assertion Passed: The arrays are equal!`);
  } else {
    console.log(`❌❌❌ Assertion Failed: The arrays are not equal!`);
  }
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);