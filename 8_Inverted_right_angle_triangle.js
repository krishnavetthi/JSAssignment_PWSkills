/*
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks with i rows.
*/

const prompt = require("prompt-sync")();
let input = prompt("Enter a number, to get inverted right-angled triangle pattern of asterisks with given number of rows: ");
let pattern ='';
for(var i=0;i<input;i++){
    for(var j=i;j<input;j++){
       pattern=pattern+'*'
    }
    console.log(pattern);
    pattern = '';
}

