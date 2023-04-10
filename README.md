# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bethanypaul989/lotide`

**Require it:**

`const _ = require('@bethanypaul989/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Head function takes in an array but as a parameter and returns only the first index 
* `tail(...)`: Tail function that takes an array as a parameter and returns a new array with all elements of the original array except for the first element.
* `middle(...)`: Middle  function that takes an array as a parameter and returns a new array with the middle element(s) of the original array.
* `assertEqual(...)`: AssertEqual function compares the actual output and expected output and prints a message whether the input and output matches or not.
* `assertArraysEqual(...)`: AssertArraysEqual function takes two arrays as parameters and logs a message to the console indicating whether or not the two arrays are equal. 
* `countOnly(...)`: CountOnly function counts how many strings are in a array.
* `letterPositions(...)`: Letter position function returns all the indices (zero-based positions) in the string where each character is found.
* `eqObjects(...)`: EqObjects function compare two objects and determine if they are equal.
* `eqArrays(...)`: eqArrays function takes in two array parameters,compares their length,and then checks each element of the arrays to see if they are equal.
* `Without(...)`: returns some arrays, and removing unwanted items