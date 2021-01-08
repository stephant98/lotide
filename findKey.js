const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const property in obj) {
    if (callback(obj[property])) {
      return property;
    }
  } return;
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"



assertEqual(result, "noma");



const result2 = findKey({
  "maracaibo": { hotness : "very"},
  "valencia": { hotness: "soso"},
  "caracas": { hotness: "nothing"}
}, item => item.hotness === "very");

assertEqual(result2, "maracaibo");