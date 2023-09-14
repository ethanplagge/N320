//Problem 1
let genreList = ["Pop", "Disco", "R&B", "Rock", "Funky"];

genreList.forEach(genre => {
  console.log(genre);
});

for(genre of genreList){
  console.log(genre);
}

//Problem 2
var favoriteMusic = document.querySelector('p:nth-child(3)');
favoriteMusic.innerText = 'My favorite genre of music is whatever is on the radio.';


//Problem 3
function animalColor(animal,colors){
  return `I have a ${animal} that is ${colors}. `;
}
var animals = document.getElementById('animals');
animals.innerText = animalColor("penguin","blue and white") + animalColor("elephant","gray");

//Problem 4
document.getElementById('myName').addEventListener('click', getName());
function getName(){
  var username = document.getElementById('myName').value;
  var color = prompt(`Welcome ${username}! What is your favorite color?`);
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
}

//Problem 5
document.getElementById('numPick').addEventListener('click', getNum());
function getNum(){
  var userNum = document.getElementById('numPick').value;
  do{
    if(userNum >= 7){
      if(userNum % 7 == 0){
        alert(userNum + " is the first number divisible by 7");
        break;
      }
      console.log("not yet");
      userNum--;
    } else {
      alert("No matches");
    }
  }while (userNum > 7);
}