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


const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  for (const key of keysObj1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

/*const hola = { a: [1, 2, 3], b: [3, 3, 4]};
const hello = { a: [1, 2, 3], b:[3, 2, 4]};
assertObjectsEqual(hola, hello);


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);*/

module.exports = assertObjectsEqual;
