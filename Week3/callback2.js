/*//SetTimeout

setTimeout(function() {
  console.log("Time is up!");
}, 2000);

function callback() {
  console.log("Callback function");
}

setTimeout(callback,1000);

//SetInterval

const cb = () => {
  console.log("Callback is called continuously");
}

//setInterval(cb,3000);

var num = 0;
var intervalID = setInterval(function() {
  num++;
  console.log(`Current Number: ${num}`);
  if(num === 5){
    console.log(intervalID);
    clearInterval(intervalID);
  }
}, 1000); */

//Foreach
var arr = [1,2,3,4,5];

/*function forLoopArray(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i] * 2);
  }
}*/

//forEach function parameters: item, index, array
arr.forEach(function(number){
  console.log(number * 2);
});

var instruments = ['drums', 'guitar', 'bass', 'tuba'];

//drums guitar bass tuba!!

var results = [];
instruments.forEach(function(item, index, arr){
  if(arr.length - 1 !== index){
    results += item + " ";
  } else{
    results += item + "!!";
  }
})

console.log(results);