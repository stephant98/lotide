# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stephant98/lotide`

**Require it:**

`const _ = require('@stephant98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(array)`: takes array as input and returns the tail of an array, (all elements after the index-zero).

* `assertEqual(actual, expected)`: takes in two values and prints out if they strictly match or not.

* `head(array)`: takes in an array and returns the first element of the array itself.

* `eqArrays(array1, array2)`: takes in two arrays and compares them to check if they are a perfect match.

* `assertArraysEqual(array1, array2)`: Used leveraging eqArrays function, and prints out if two arrays are a perfect match.

* `without(array, notWanted)`: takes in an array and an array with items you wish to eliminate, it then returns and a new array without the notWanted.

* `middle(array)`: takes in an array and returns the middle item of the array.

* `countOnly(allItems, itemsToCount)`: takes in an array and an object, it will return an object containing counts of everything that the input object listed.

* `countLetters(sentence)`: takes in a sentence and returns an object with the count of each of the letters in that sentence.

* `letterPositions(sentence)`: takes in a sentence and returns an object with all the indices in the string where each character was found (each key being the character and each value being the indices where it was found).

* `findKeyByValue(object, value)`: takes in an object and a value, it scans the object and returns the first key which contains the given value. If no key is found, returns undefined.

* `eqObjects(object1, object2)`: takes in two objects and checks if both objects have identical keys with identical values.

* `assertObjectsEqual(actual, expected)`: Used leveraging eqObjects function, and prints out if two objects have identical keys and identical values.

* `map(array, callback)`: the map function will return a new array based on the results of the callback function.

* `takeUntil(array, callback)`: the function will return "a slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.

* `findKey(object, callback)`: takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, it returns undefined.
