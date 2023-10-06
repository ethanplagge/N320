//REST - takes the rest of the values and puts them into an array
let arr = [1,2,3,4,5];
function add(...nums){
  let total = 0;
  for(const n of nums){
    total += n;
  }
  return total;
}

console.log("Add Function: ", add(1,3,5,7,9));
console.log("Add Function: ", add(arr)); //Doesn't work with arrays

function printVal(a,b,...c){
  console.log("A: ", a);
  console.log("B: ", b);
  console.log("C: ", c);
}

printVal(1,2,3,4,5,6,7,8,9);
printVal(1,2); //if there aren't emough values, it will just create an empty array at the end
printVal("happy","halloween","October");


//use the previous function that takes 2 numbers and averages out the 4 operations of them
function callback(num1,num2, ...mValues){
  let total = mValues.reduce(function(accm,next){
    accm += next;
    return accm;
  },0);

  let myAvg = total/mValues.length;
  console.log("Numbers chosen: ", num1, ", ", num2);
  console.log("total: ", total);
  console.log("average: ", myAvg);
}

function higherOrder(num1, num2, cb){
  let a = num1 + num2;
  let s = num1 - num2;
  let m = num1 * num2;
  let d = num1 / num2;
  cb(num1,num2, a,s,m,d);
}

higherOrder(4,2,callback);


//SPREAD - takes an array and spreads them out to individual values
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let combined = [...arr1,...arr2,...arr3];
console.log("Spread:", combined);
console.log("Max Value:", Math.max(...combined));

function sumVal(a,b,c){
  return a + b + c;
}

console.log("Sums: ", sumVal(...arr1));

//Start:[1,6] [2,3,4,5]
//End: [1,2,3,4,5,6]

function inMiddle(arr,vals){
  let mid = Math.floor(arr.length / 2); //midpoint
  arr.splice(mid,0,...vals); //where it starts, what to delete, what to add
  return arr;
}

console.log("Place in Middle: ", inMiddle([1,6], [2,3,4,5]));