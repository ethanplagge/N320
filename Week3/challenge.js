/*const splitWord = (word) => {
  let wordArray = word.split("");
  console.log(wordArray[0]);
  getMiddle(wordArray);
}

const getMiddle = (array) => {
  let middle = array.length / 2;
  let middleValue = array[middle];
  console.log(middleValue);
}

splitWord("tebst");*/

/*
start with higer order functions, then do the specific thing
*/

const cb = (h,m,a) => {
  let mLetter = a[h];
  let mLetter2 = m[h];
  document.write(`Word: ${m}, Middle Letter: ${mLetter}, Position: ${mLetter2}`);
}

const midPos = (msg, callback) => {
  let sl = msg.length;
  let half = Math.floor(sl/2);
  let sArray = msg.split("");
  callback(half, msg, sArray);
}

midPos("Frank", cb);