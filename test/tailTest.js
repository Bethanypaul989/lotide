const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Is', 'Cool'] for ['Coding', 'Is', 'Cool']", () => {
    assert.deepEqual(tail(["Coding", "Is", "Cool"]), ["Is", "Cool"]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns an [] for its tail if passed an array with one element", () => {
    assert.deepEqual(tail(["X"]), []);
  });

  it("returns an empty array for its tail if passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
