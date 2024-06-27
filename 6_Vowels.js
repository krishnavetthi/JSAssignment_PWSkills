/*
6. Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted.
*/

const prompt = require("prompt-sync")();
let inputstring = prompt("Enter word: ");
console.log(inputstring);

const count = ((val) => Array.from(val).filter(letter => 'aeiou'.includes(letter)).length);
console.log(count(inputstring)); 