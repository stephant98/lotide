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



const words = ["familia", "christian", "lia", "erich", "stephan"];
const venezuelaCities = ["caracas", "valencia", "maracaibo"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(venezuelaCities, venezuelaCity => venezuelaCity[1]);
console.log(results2);


assertArraysEqual(results1, ["f", "c", "l", "e", "s"]);
assertArraysEqual(results2, ["a", "a", "a"]);
