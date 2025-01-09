// IIFE  = Immeditaly invoked function expression 

// (function myname(){
//     console.log(` DB connected `); 
// })();
// ( () =>{
//      console.log(`DB connected two `);
// })
// ();

// let a = 10;
// let b = 5; 
function addtwo(num1, num2){
    let total = num1 + num2;
    return total;
}
// let result1 =  addtwo(a,b);
// console.log(result1);
let result2 = addtwo(10,5)
console.log(result2);