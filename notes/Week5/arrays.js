// ********** ARRAY METHODS **********

//FOR EACH - loops through the values in an array

let arr = [1, 2, 3];

arr.forEach(function(value) {
  console.log("ForEach value + 1: " + (value+1) );
});

function doubleValues(array) {
  var newArr = [];
  array.forEach(function(value){
    newArr.push(value * 2);
  })
  return newArr;
}
console.log(doubleValues(arr));


//EVERY - sees if every value in our array match, you get true, if not, you get false (only boolean)

var eArr = [-1,-2,-3];
var everyFn1 = eArr.every(function(value) {
  return value < 0;
});

console.log("Every Function Result: " + everyFn1);

var everyFn2 = eArr.every(function(value) {
  return value > -2;
});

console.log("Every Function 2nd Result: " + everyFn2);

//Check to see if the characters are lowercase
function allLowerCase(str){
  return str.split("").every(function(value){
    return value === value.toLowerCase();
  })
}

console.log( "All lower case result: ", allLowerCase("this is a sentence"));
console.log("All lower case result 2: ", allLowerCase("Today is a Thursday"));

//Check to see if all array values are arrays
function allArrays(arr){
  return arr.every(Array.isArray);
}

console.log("All Arrays 1: ", allArrays([[1,2], ["dog", "cat"], [0], [true, false]]));
console.log("All Arrays 2: ", allArrays([[1,2], "dog", "cat", 0, [true, false]]));


//SOME - sees if some values in our array match, you get true, if not, you get false (only boolean)

let sArr = [10, 20, 30];

var someFn1 = sArr.some(function(value) {
  return value > 20;
});


var someFn2 = sArr.some(function(value) {
  return value < 5;
});
console.log("Some Function Result: " + someFn1);
console.log("Some Function Result 2: " + someFn2);

function hasEvenNum(arr){
  return arr.some(function(value){
    return value % 2 == 0;
  })
}

console.log("Does this have only some even numbers: ", hasEvenNum([1, 2, 3, 4, 5]));
console.log("Does this have only some even numbers 2: ", hasEvenNum([1, 29, 3, 47, 5]));