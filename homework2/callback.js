//callback Function
function myAverage(num1, num2, sum, subtract, multiply, division){
  document.getElementsByTagName('p')[0].innerHTML = `Numbers Chosen: ${num1}, ${num2}`;
  let total = (sum + subtract + multiply + division);
  document.getElementsByTagName('p')[1].innerHTML = `Total: ${total}`;
  let average = total/4;
  document.getElementsByTagName('p')[2].innerHTML = `Average: ${average}`;
}


//higher order function
function myCalculator(num1, num2, callbackFunction){
  let sum = num1 + num2;
  let subtract = num1 - num2;
  let multiply = num1 * num2;
  let division = num1 / num2;
  callbackFunction(num1, num2, sum, subtract, multiply, division);
}

myCalculator(4,2,myAverage);