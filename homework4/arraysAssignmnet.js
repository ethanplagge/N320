const students = [

  { name: 'Alice', grades: [85, 92, 78, 90] },
 
  { name: 'Bob', grades: [75, 88, 95, 100] },
 
  { name: 'Charlie', grades: [60, 72, 68, 74] },
 
  { name: 'David', grades: [92, 88, 95, 98] },
 
  { name: 'Eve', grades: [100, 100, 100, 100] }
 
  ];

//lists out the student names
students.forEach(student => {
    let nameList = document.getElementsByClassName("sList")[0];
    nameList.innerHTML += " " + student.name;
});


//lists out what students have passed the class
const allStudentsPassed = students.every(function(student) {
  return student.grades.every(function(grade) {
    return grade >= 60;
  });
});
document.getElementsByTagName('p')[1].innerHTML += allStudentsPassed;


//lists out students who have a perfect score
const hasPerfectScore = students.some(function(student) {
  return student.grades.every(function(grade) {
    return grade === 100;
  });
});
document.getElementsByTagName('p')[2].innerHTML += hasPerfectScore;


//display students with an average of 90 or higher
students.filter(function (student){
  let sum = student.grades.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
  })
  let average = Math.floor(sum / student.grades.length);
  if(average >= 90){
    let avgList = document.getElementsByClassName("sList")[1];
    avgList.innerHTML += " " + student.name;
  }
})


//display student's name along with their average
let studentSummaries = students.map(function(student, index){
  let sum = student.grades.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
  })
  let average = Math.floor(sum / student.grades.length);
  let averagesList = document.getElementsByTagName('p')[4];
  averagesList.innerHTML += "<ul> Name: [" + student.name + "] , Average Grade: [" + average + "]</ul>";
})


//display total student's grades
const totalGrades = students.reduce(function(total, student) {
  return total + student.grades.length;
}, 0);
let averagesList = document.getElementsByTagName('p')[5].innerHTML += totalGrades;
