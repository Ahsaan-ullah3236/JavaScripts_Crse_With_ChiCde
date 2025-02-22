const promiseOne = new Promise(function (resolve, reject ){
    // do an async task 
    setTimeout (function () {
        console.log("async task is complete ");
        
    }, 1000);
});
