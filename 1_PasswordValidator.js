/* 1. Password Validator
 Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.
*/

const prompt = require("prompt-sync")();
console.log("Password Validator");
let password = prompt("Enter password: ");
let confirmpassword = prompt("Re-enter the password: ");

if(password==confirmpassword){
    console.log("Password Matched. Password validation Successful.");
}else{
    console.log("Password didn't match. Password validation unsuccessful.");
}

