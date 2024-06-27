/*
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use a for loop and continue statement.
*/

const prompt = require("prompt-sync")();
let input = prompt("Enter numbers and check which are divisible by 3 but not by 2: ");
let inputstring = input.split(",");
// let div_3 = [];
// var divi_3 = arr =>{
//     arr.forEach(val=>{if(val%3==0 && val%2!=0){
//         div_3.push(val);
//     }})
// }

// divi_3(inputstring);
// console.log(div_3)

for(i=0;i<inputstring.length;i++){
    if(inputstring[i]%3==0 && inputstring[i]%2!=0){
        console.log(inputstring[i]);
    }else{
        continue;
    }
}