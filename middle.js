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

const middle = function(arr) {
  let middleVal;
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    middleVal = [arr[Math.floor(arr.length / 2)]];
  } else if (arr) {
    middleVal = [arr[Math.floor((arr.length - 1) / 2)] , arr[Math.floor(arr.length / 2)]];
  }
  return middleVal;
};

// first else if for even length arrays
// second else ir  for odd length arrays


console.log(middle([1]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]));

assertArraysEqual(middle(["hello", "hola", "bien"]), ["hola"]);
assertArraysEqual(middle(["middle"]), ["middle"]);