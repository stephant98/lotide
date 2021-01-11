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

const without = function(arr, notWanted) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== notWanted[i]) {
      output.push(arr[i]);
    }
  } return output;
};

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
//console.log(without(["hola", "senor"], ["hola", "senora", "buenos dias"]));

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;