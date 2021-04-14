const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

function flatten(nestedArray) {
  const finalArray = [];
  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      for (let element of item) {
        finalArray.push(element);
      }
    } else {
      finalArray.push(item);
    }
  }
  return finalArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
