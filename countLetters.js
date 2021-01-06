const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      if (letter !== " ") {
        letterCount[letter] = 1;
      }
    }
  } return letterCount;
};

console.log(countLetters("hola senor como esta"));
assertEqual(countLetters("hola me llamo stephan").h, 2);
assertEqual(countLetters("hola me llamo stephan").o, 2);
assertEqual(countLetters("hola me llamo stephan").l, 2);