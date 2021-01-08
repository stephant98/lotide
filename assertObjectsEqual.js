const eqObjects = function(object1, object2) {
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  for (const key of keysObj1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};