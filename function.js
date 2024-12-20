// console.log("A");
// console.log("H");
// console.log("S");
// console.log("A");
// console.log("N");

// function myFunction(num1, num2) {
//   let result =  num1 + num2;
//   return result;
// }
// myFunction(3,4)

// function myFunction(userName  = " me ho ") {
//     if (userName === undefined) {
//         console.log("Please enter the username")
//     }
//     return `${userName} just logged in `
// }
// console.log( myFunction( " ahsna khan " ));

// function calculaeTwoNum(val1, val2, ...num1){
//     return num1;
// }
// console.log(calculaeTwoNum(2,534,354654,345));
// function mynames(...num){
//     return num.reduce((acc, current) => acc + current, 0);
//  }

//  const myadditionArray = mynames(100, 200, 300);
//  console.log(myadditionArray);

function one() {
    const username = "ahsan ullah";
    function two() {
        const username = "youtoube";
        console.log(username);  
    }
    two();
    console.log(username);
}
// one();
// if (true) {
//     const username = "ahsan";
//     if (username === "ahsan") {
//         console.log("Welcome to Ahsan ullah");
//     }
// }

console.log(addone(5));
function addone(num){
    return num + 1; 
}




console.log(adddtwo(10));
const adddtwo  =  function (num){
    return num + 1; 
}

