/*
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. This function could be useful for the store's marketing team to create promotions and offers that attract customers.
*/

const prompt = require("prompt-sync")();
const original_price = prompt("Enter the original price :  ");
const discounted_price = prompt("Enter the discounted price:  ");

const percentage_discount = (original, discounted) => {
    var percentage =  ((original-discounted)/original*100).toFixed(2);
    return percentage
}

console.log("The discounted percentage is "+ percentage_discount(original_price,discounted_price) +" %");