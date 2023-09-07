//DOM related stuff

//return one element: querySelector

document.querySelector('div ul li:first-child').innerHTML = 'querySelector';

document.querySelector('.my').innerHTML = 'selected a class';


//grab a list
//getElementsByClassName('my')

document.getElementsByClassName('my')[1].innerHTML = "yowch";

document.getElementsByTagName('li')[1].innerHTML = "second list item";

//Single values:
//getElementByID
//querySelector

//Multiple elements
//getElementsByTagName
//querySelectorAll

function callBack(){
  console.log('Original callback function');
}
function higherOrder(newFn){
  console.log('before callback');
  newFn();
  console.log('after function');
}



function firstFunction(msg){
  alert(msg);
}

function middleFunction(msg){
  console.log(msg);
}

function lastFunction(msg){
  return confirm(msg);
}


const startFunction = (msg,mFn) => {
  //function startFunction(msg,mFn){}
  alert(msg);
  mFn(msg, endFunction);
}

const nextFunction = (msg, eFn) => {
  console.log(msg);
  eFn(msg);
}

const endFunction = (msg) => {
  return confirm(msg);
}

//const endFunction=(msg)=>confirm(msg);

//startFunction('callback message', nextFunction);

//You would use this kind of method in order to ensure that
//functions are running in a specific order. Especially for like
//page load out so that it's not caught up on something that takes a while to load

const costTable = (subT, tip, total) =>{
  let createTable = `<ul><li>Subtotal: ${subT}</li>
  <li>Tip: ${tip}</li><li>Total: ${total}</li></ul>`;
  document.write(createTable);
}


const calcTotal = (subT, tip, table, taxRate=0.07) => {
  let total = subT + (subT * taxRate) + tip;
  total = total.toFixed(2);
  //let dinner = [subT, tip, total];
  table(subT,tip,total);
}

calcTotal(34.95,10.51,costTable);

