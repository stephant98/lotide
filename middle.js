const middle = function(arr) {
  let middleVal;
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    middleVal = [arr[Math.floor(arr.length / 2)]];
  } else if (arr) {
    middleVal = [arr[Math.floor((arr.length - 1) / 2)] , arr[Math.floor(arr.length / 2)]];
  }
  return middleVal;
};

module.exports = middle;