//  ForEach: 
//  1: Just loops through the array and performs an action (e.g., logging). It doesn’t return anything.
//  2: Logs each number.
const names_forEach = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
names_forEach.map( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
// forEach in the return form 
const names_forEach_return = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
const names_forEach_return_in_returns= names_forEach_return.forEach( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
console.log(names_forEach_return_in_returns);


// MAP: Creates a new array by transforming each element of the original array. 
const names_Map = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
names_Map.map( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
// Retunr Case in map 
const names_Map_in_return = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
 const names_Map_in_returns =names_Map_in_return.map( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
console.log(names_Map_in_returns);

// Reduce :Combines all elements into a single value (e.g., a sum, an object, or a string) 
const names_reduce  = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
names_reduce.map( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
// Retunr Case in Reduce
const names_Reduce_in_return = ["ahsan", "rehman", "Yaqoob", "Ali", "shoket", "noshad"]
 const names_Reduce_in_returns =names_Reduce_in_return.map( (item,index) => {
    setTimeout(() => {
        console.log(item , " is a good boy");
    }, index * 3000);
});
console.log(names_Reduce_in_returns);


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
 const myReturnNumber = myNumbers.filter((item)=>  item  > -3 
)
console.log(myReturnNumber);









