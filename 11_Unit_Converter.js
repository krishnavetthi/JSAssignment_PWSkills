/*
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station to provide temperature readings that are easily understandable to a wider audience.
*/

const prompt = require("prompt-sync")();
let celsius = prompt("Enter the temperature in celsius: ");

let Fahrenheit = (ele)=>{
   return (ele * 9/5) + 32 
}
console.log(Fahrenheit(celsius)+"F")