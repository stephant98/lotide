const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]));

assertArraysEqual(middle(["hello", "hola", "bien"]), ["hola"]);
assertArraysEqual(middle(["middle"]), ["middle"]);