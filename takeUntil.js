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



const takeUntil = function(array, callback) {
  let accumulator = [];

  for (const item of array) {
    if (!callback(item)) {
      accumulator.push(item);
    } else {
      return accumulator;
    }
  } return accumulator;
};

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results = takeUntil(data1, data => data < 0);

//console.log(results);

//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

//assertArraysEqual(results, [1, 2, 5, 7, 2]);
//assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;