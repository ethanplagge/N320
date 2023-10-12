//For
for(let i = 0; i < 5; i++){
  console.log("Yup:", i + 1);
}


//While
let w = 0;
while(w < 5){
  console.log("While Yup:", w + 1);
  w++;
}


//Do While
let d = 10;
do{
  console.log("DoWhile:", d);
  d--;
} while(d < 5);

//For...In
const Course = {
  "cNum":'N320',
  "cTitle":'Inrtoduction to Vue',
  "prereq":false,
  "offering": ['Fall', 'Spring', 'Summer'],
  "limit":20
}
let seasons = ['Fall','Winter','Spring','Summer'];
let holiday = "halloween";


for(property in Course){
  console.log(property + ": " + Course[property]);
}

for(key in seasons){
  console.log(key + ": " + seasons[key]);
}


for(h in holiday){
  console.log(h + ": " + holiday[h]);
}

//For...Of
//for(property of Course){
//  console.log(property + ": " + Course[property]);
//}

for(key of seasons){
  console.log(key);
}


for(h of holiday){
  console.log(h + ": " + holiday[h]);
}