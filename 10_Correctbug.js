/*
You are working on an e-commerce website where customers can add items to their cart. The cart stores the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart array to correct the bug.
*/

let quantity = [12,38,42,25,10,34,64,92,60,90];
let correct_quantity = quantity.map((element)=>element/2);
console.log(correct_quantity);