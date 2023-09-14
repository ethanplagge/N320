//3 states: pending, fulfilled, rejected

/*let basicPromise = new Promise(function(resolve, rejected){
  let x=12;
  if(x==10){
    resolve();
  } else{
    rejected();
  }
})

basicPromise.then(function(){
  document.write("Basic Promise is Resolved");
}, function(){
  document.write("Basic Promise is Rejected");
})*/


//Another basic promise using catch
/*
const cPromise = new Promise(function(resolve,rejected){
  let newNum = Math.random();
  if(newNum < 0.5){
    resolve(newNum);
  } else{
    rejected(newNum)
  }
})

//you can have just .then, or .catch if you wanted
cPromise.then(function(num){ //resolve
  console.log("Promise Resolved", num);
}).catch(function(num){ //reject
  console.log("Promise Rejected", num);
})
*/

/*
//Promise with a setTimeout
const rNumPromise = new Promise(function(resolve, rejected){
  setTimeout(function() {
    let randNum = Math.floor(Math.random()*10)+1;
    resolve(randNum);
  }, 2000);
})

rNumPromise.then(function(data){
  console.log("SetTimeout Promise Resolved", data);
});

console.log("SetTimeout Initiated");
*/

/*
//Promise Chain
const promiseChain = new Promise(function(resolve, rejected){
  resolve(5);
});

promiseChain.then(function(data){
  return data*2;
}).then(function(data){
  return data + 20;
}).then(function(data){
  console.log(data);
})
*/

//Data from an external source
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");


fetchPromise.then(function(response){
  const jPromise = response.json();
  jPromise.then(function(data){
    console.log("Data received: ", data[4].name);
  })
})