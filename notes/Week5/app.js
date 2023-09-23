const fPromise = new Promise (function (resolve, rejected){
  setTimeout(function() {
    resolve("First Promise");
  }, 1000);
})

const mPromise = new Promise (function (resolve, rejected){
  setTimeout(function() {
    resolve("Second Promise");
  }, 2000);
})

const lPromise = new Promise (function (resolve, rejected){
  setTimeout(function() {
    resolve("Third Promise");
  }, 3000);
})

function timer(fPromise, mPromise, lPromise){
  fPromise.then(function (data){
    return console.log(data);
  });
  mPromise.then(function (data){
    return console.log(data);
  });
  lPromise.then(function (data){
    return console.log(data);
  });  
}

timer(fPromise, mPromise, lPromise);

