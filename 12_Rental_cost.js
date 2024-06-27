/*
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They required a function that takes in the number of days rented and car type and returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are
Economy = Rs. 4000 /- per day.
Midsize = Rs. 10000 /- per day.
Luxury = Rs. 20000 /- per day.
*/

const prompt = require("prompt-sync")();
let car = prompt("Welcome!! Choose the car you want to rent \n Economy = Rs. 4000 /- per day \n Midsize = Rs. 10000 /- per day\n Luxury = Rs. 20000 /- per day :");
let days = prompt("Enter the number of days you want to rent : ");

let rental_cost = (car) => {
    if(car=="Economy"){
        return days*4000
    }else if(car=="Midsize"){
        return days*10000
    }else if(car=="Luxury"){
        return days*20000
    }
};

console.log(rental_cost(car));