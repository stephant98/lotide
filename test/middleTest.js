const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('should return ["hola"] for ["hello", "hola", "bien"]', () => {
    assert.deepEqual(middle(["hello", "hola", "bien"]), ["hola"]);
  });

  it('should return an empty array for one element array ["middle"]', () => {
    assert.deepEqual(middle(["middle"]), []);
  });

  it('should return two elements [2, 3] for an even length array [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return one elements [2] for an odd length array [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});

