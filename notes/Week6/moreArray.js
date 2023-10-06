//FILTER ARRAY METHOD - Seperates values in an array and creates a new array based on them
var fArr = [1,2,3,4,5,6];

var firstFilter = fArr.filter(function(value){
  return value > 2;
})

console.log(firstFilter);

//only names with 4 letters
var names = ["Gabe", "Mike", "Ethan", "Owen", "Grace", "Jennifer", "Abby"];

function fourLetters(arr){
  return arr.filter(function(value){
    return value.length === 4;
  })
}

console.log("Four Letters:", fourLetters(names));

//filter through web classes in Luddy
let classList = ["N115", "N220", "N320", "N215", "N315", "N317", "N322", "N423"];

function advClass(arr){
  return arr.filter(function(value){
    return value.substr(1,3) > 300;
  })
}

console.log("Adv. Class Filter: ", advClass(classList));

//create a list of people that are employed
let students = [
  {first: "Greg", last: "Smith", employed: true},
  {first: "Jennifer", last: "Rogers"},
  {first: "Jacob", last: "StateFarm", employed: true},
  {first: "Guy", last: "Fieri"}
]

let students2 = [
  {first: "Greg", last: "Smith", employed: true},
  {first: "Jennifer", last: "Rogers", employed: false},
  {first: "Jacob", last: "StateFarm", employed: true},
  {first: "Joe", last: "StateFarm", employed: false},
  {first: "Guy", last: "Fieri", employed: false}
]

function filterByIndex(arr, key){
  return arr.filter(function(value){
    return !value[key];
  })
}

console.log("Not employed: ", filterByIndex(students2, 'employed'));

//MAP ARRAY FUNCTION - Creates a new array based off an existing array that's been modified
//think of it as a non-destructive way of editing an array

let mArr = [2,3,4,5,6];

let mapArray = mArr.map(function(value, index){
  return {
    key: index, 
    value: value * value
  }
})

console.log("Squared", mapArray);

//creates an array that prints out the first name
function firstName(arr){
  return arr.map(function(value){
    return value.first;
  })
}

console.log(firstName(students2));

//value * index
function vtIndex(arr){
  return arr.map(function(value, index){
    return value * index;
  })
}

console.log("Value x Index: ", vtIndex([2,5,9,18]));

//REDUCE ARRAY METHOD - reduce all the values into one value

//2 parts: callback, initalValue
//accumulator, nextValue

let reduceArr = [1,2,3,4,5];
//with initial value
let reduceFn = reduceArr.reduce(function(accumulator,nextValue){
  return accumulator + nextValue;
},10);
console.log("Reduce Function 1: ", reduceFn);

//no initial value
let reduceFn2 = reduceArr.reduce(function(accumulator,nextValue){
  return accumulator + nextValue;
});
console.log("Reduce Function 2: ", reduceFn2);

let family = [ "William", "Abigail", "Mike", "Max", "Richie", "Ben", "Christopher"];
//output: My family members are Me Someone Someone Else One other person

let familyFn = family.reduce(function(accumulator,nextValue){
  return accumulator += " " + nextValue;
}, "My family is");
console.log(familyFn);

//Object Reduction
var familyMembers = [
  {first: "Abigail", age: 24},
  {first: "William", age: 35},
  {first: "Mason", age: 14}
]

function extractValue(arr, key){
  return familyMembers.reduce(function(accumulator,nextValue){
    accumulator.push(nextValue[key]);
    return accumulator;
  },[])
}
console.log("First Name Array: ", extractValue( familyMembers, "first"));

//seperate into 2 different arrays, short and long names
let family2 = [ "William", "Abigail", "Mike", "Max", "Richie", "Ben", "Christopher"];

function nameLength(value){
  return value.length > 4;
}

function partition(arr, callback){
  return arr.reduce(function(accumulator,nextValue){
    if(callback(nextValue)){
      accumulator[0].push(nextValue);
    } else{
      accumulator[1].push(nextValue);
    }
    return accumulator;
  },[[],[]]);
}

console.log(partition(family2,nameLength));