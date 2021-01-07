
const words = ["familia", "christian", "lia", "erich", "stephan"];
const venezuelaCities = ["caracas", "valencia", "maracaibo"];

const map = function(array, callback) {

  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(venezuelaCities, venezuelaCity => venezuelaCity[1])
console.log(results2)


