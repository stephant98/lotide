const letterPositions = function(sentence) {
  const results = {};
  // iterate over sentence
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      if (sentence[i] !== " ") {
        results[sentence[i]] = [i];
      }
    }
  } return results;
};

console.log(letterPositions("lighthouse in the house"));

