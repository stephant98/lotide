const takeUntil = function(array, callback) {
  let accumulator = [];

  for (const item of array) {
    if (!callback(item)) {
      accumulator.push(item);
    } else {
      return accumulator;
    }
  } return accumulator;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results = takeUntil(data1, data => data < 0);

console.log(results);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

