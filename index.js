// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const eqObjects = require('./eqObjects');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
  assertEqual,
  assertArraysEqual,
  eqArrays,
  countOnly,
  letterPositions,
  eqObjects
};