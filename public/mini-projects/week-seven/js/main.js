//create an array 5 arrays
//each inner array should contain a name and a number grade

//create a function called getGrade with a parameter of value

//inside the function, create an if/else statement that accounts for grades and values from F to A

//create a for loop that iterates through the length of the students array and increments by 1 with each loop

//inside the for loop, use a method of your choice (NOT document.write()) to output a string of text that reads like the following example:
//David's number grade is 80 and letter grade is a B

let studentGrades = [
  ["Hermione", 100],
  ["Harry", 85],
  ["Ron", 70],
  ["Luna", 99],
  ["Malfoy", 65],
];

function getGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

for (
  let i = 0;
  i < studentGrades.length;
  i++ // 0 is the position of array. counts up number of items in array. if 0 is less than total number of items in array
) {
  const newElement = document.createElement("p");
  newElement.textContent = `${studentGrades[i][0]}'s number grade is ${
    studentGrades[i][1]
  } and letter grade is a ${getGrade(studentGrades[i][1])}.`; //i to provide access to array
  result.appendChild(newElement);
}
