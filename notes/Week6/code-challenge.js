//Challenge 1
function hasAZ(str){
  return str.split('').some(function(value){
    return value == 'z';
  })
}

console.log(hasAZ("O sphinx of black quartz judge my vow"));

//Challenge 2
function hasOnlyOddNumbers(arr){
  return arr.every(function(value){
    return value%2 !== 0;
  })
}

console.log(hasOnlyOddNumbers([1, 5, 3, 9]));