const promiseOne = new Promise(function (resolve, reject ){
    // do an async task 
    setTimeout (function () {
        console.log("async task is complete ");
        
    }, 1000);
});
let a=3;
let b=3; 
let c=a+b;
console.log(c);
promiseOne.then(function () {
    console.log("promise is resolved");
}).catch(function () {
    console.log("promise is rejected");
});
