/*
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.
*/

const customer_cart = [{unitprice:10, quantity:20},{unitprice:20, quantity:36},{unitprice:15, quantity:20},{unitprice:68, quantity:23},{unitprice:88, quantity:67},{unitprice:13, quantity:78},{unitprice:56, quantity:30}];
var total = 0;
const total_cost = (arr)=>{
     arr.forEach((item)=>{total = total+(item.unitprice*item.quantity)})
     return total;    
}
console.log(total_cost(customer_cart))


