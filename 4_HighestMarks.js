/*  
4. Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.
*/

const prompt = require("prompt-sync")();
let marks = [];
console.log("Enter names and marks of 5 student:")
for(let i=0;i<5;i++){
let name = prompt("Enter student name :");
let mark = prompt("Enter student marks: ");
marks.push({name,mark});
}

let highestMark = marks.reduce((start,next)=>start.mark > next.mark ? start : next, 0);
console.log(`Highesht marks are ${highestMark.mark}, secured by ${highestMark.name}`);





