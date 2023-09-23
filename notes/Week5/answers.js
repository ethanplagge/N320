/*async function allThree(){
  const p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("First Promise");
      resolve("First Fulfilled");
    },1000);
  });
  const p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Second Promise");
      resolve("Second Fulfilled");
    },2000);
  });
  const p3 = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Third Promise");
      resolve("Third Fulfilled");
    },3000);
  });
  const combinedP = Promise.all([p1,p2,p3]);
  return combinedP;
}

async function returnData(){
  let data = await allThree();
  console.log(data);
}

returnData();
*/

//Async Function with an API call

async function goChuck(){
  //API Call
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  //Format into JSON
  const results = await response.json();

  return results;
}

goChuck().then((data) => {
  console.log(data);
  let chuckMsg = document.createElement("p");
  chuckMsg.innerHTML = data.value;
  document.getElementsByTagName('body')[0].appendChild(chuckMsg);
}).catch((error) => {
  console.log("An error occured here");
})