const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("should return an empty array for ['hola']", () => {
    assert.deepEqual(tail(['hola']), []);
  });

  it('should return an empty array for an empty array', () => {
    assert.deepEqual(tail([]), []);
  });
});
