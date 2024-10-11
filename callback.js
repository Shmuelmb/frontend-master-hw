// Challenge 9
function objOfMatches(array1, array2, callback) {
  let result = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      console.log(array1[i]);

      result[array1[i]] = array2[i];
    }
  }
  return result;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     }
//   )
// );

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const result = {};
  for (let i = 0; i < arrVals.length; i++) {
    result[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      result[arrVals[i]](arrCallbacks[j](arrVals[i]));
    }
  }
  return result;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );

// Challenge 11
function objectFilter(obj, callback) {
  const newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = callback(key);
    }
  }
  return newObj;
}
// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase()));
// Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let countTrue = 0;
  let countFalse = 0;
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? countTrue++ : countFalse++;
  }
  return countTrue > countFalse;
}

/*** Uncomment these to check your work! ***/
// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true

function prioritize(array, callback) {
  const result = [];
  const falsy = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? result.push(array[i]) : falsy.push(array[i]);
  }
  return [...result, ...falsy];
}

/*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
// console.log(
//   prioritize(
//     ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
//     startsWithS
//   )
// ); // should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  let result = {};
  let firstKey = callback(array[0]);
  let count = 1;
  let count2 = 1;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === firstKey) {
      console.log(firstKey);
      result[callback(array[i])] = count++;
    }
    if (callback(array[i]) !== firstKey) {
      result[callback(array[i])] = count2++;
    }
  }

  return result;
}
function countBy(array, callback) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value in result) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  }
  return result;
}
/*** Uncomment these to check your work! ***/
// console.log(
//   countBy([2, 2, 2, 2, 2], function (num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   })
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value in result) {
      result[value].push(array[i]);
    } else {
      result[value] = [array[i]];
    }
  }
  return result;
}

/*** Uncomment these to check your work! ***/
const decimals = [1.1, 1.5, 3.5, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
