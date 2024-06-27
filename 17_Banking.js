/*
A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.
*/

const user = {
    name : "Krishna",
    balance : 1500,
};

const prompt = require("prompt-sync")();
const option = prompt("Choose from below 1.deposit 2.withdraw :  ");
const amount = Number(prompt("Enter the amount : "));

const deposit = amt => user.balance = user.balance + amt;
const withdraw = amt => user.balance = user.balance - amt;

if(option==1){
    deposit(amount);
    console.log("Total balance in account : "+user.balance);
}else{
    withdraw(amount);
    console.log("Total balance in account : "+user.balance);
}

