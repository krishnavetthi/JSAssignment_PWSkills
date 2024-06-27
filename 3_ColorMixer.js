/*3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
based on the following criteria:
-> If color1 is "red" and color2 is "blue" or vice versa, print "purple".
-> If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
-> If color1 is "blue" and color2 is "yellow" or vice versa, print "green".
-> If any other combination of colors is input, the program should print "Invalid color combination".
*/

const prompt = require("prompt-sync")();
console.log("Color Mixer: Enter these colors red,yellow,blue");
let color1 = prompt("Enter first color: ");
let color2 = prompt("Enter second color:  ");

if(color1 == "red" && color2=="blue"){
    console.log("purple");
}else if(color1 == "red" && color2=="yellow"){
    console.log("orange");
}else if(color1 == "blue" && color2=="yellow"){
    console.log("green");
}else{
    console.log("Invalid color combination");
}