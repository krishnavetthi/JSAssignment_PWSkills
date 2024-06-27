/*
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/

const cost = [300,400,150,148,200,1000];
const num_of_people = 5;
let cost_obj={
    totalcost:0,
    eachcost:0
}
let split_bill = (arr,num)=>{
    cost_obj.totalcost = arr.reduce((acc,curr)=>acc+curr,0)
    cost_obj.eachcost = (cost_obj.totalcost)/num;
}

split_bill(cost,num_of_people);
console.log(cost_obj);
