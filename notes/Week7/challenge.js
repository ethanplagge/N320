let arr = [1,2,3,4,5];

let reduceFn = arr.reduce(function(accumulator,nextValue){
  let num = nextValue * nextValue;
  console.log(num);
  if(num % 2 == 0){
    return accumulator + num;
  }
  return accumulator;
},50);

console.log(reduceFn);