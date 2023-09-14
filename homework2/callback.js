//callback Function
function mySelector(num1, num2, sum, subtract, multiply, division){
  document.getElementsByTagName('p')[0].innerHTML = `The 2 numbers selected are: ${num1}, and ${num2}`;
  document.getElementsByTagName('p')[1].innerHTML = `Addition: ${sum} 
  <br> Subtraction: ${subtract}
  <br> Multiplication: ${multiply}
  <br> Division: ${division}`;
}


//higher order function
function myCalculator(num1, num2, callbackFunction){
  let sum = num1 + num2;
  let subtract = num1 - num2;
  let multiply = num1 * num2;
  let division = num1 / num2;
  callbackFunction(num1, num2, sum, subtract, multiply, division);
}

myCalculator(8,50,mySelector);