// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1,2,3,4,5], (num)=> num*2));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);

// Challenge 5
function mapWith(array, callback) {
  const result = [];
  forEach(array, (item) => result.push(callback(item)));
  return result;
}
// console.log(mapWith([1,2,3,4,5], (num)=> num*2));

// Challenge 6
function reduce(arr, callback, initial) {
  let result = initial;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}
// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0));

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter((el) => acc.includes(el));
  });
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((acc, curr) => {
    const elements = curr.filter((el) => !acc.includes(el));
    return acc.concat(elements);
  });
}
console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

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
