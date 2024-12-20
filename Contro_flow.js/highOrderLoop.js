// const array = [ 1,2,3,4,5,5,6,6,6]
// for (const num of array) { 
//     // console.log(num); 
// }

// const greetings  = "hello world!";
// for (const greet  of greetings) {
//     console.log(`Each charater is ${greet}`);
// }


// const map = new Map()
// map.set('IN', "Pakistan")
// map.set('Fr', "France")
// map.set('IN', "Pakistan")
// console.log(map);

// forin loop with the objects /
// const myObject = {
//     js:'javascripts',
//     cpp: 'C++',
//     rb: 'Ruby bo rails',
// }
// for (const key in myObject) {
//     console.log(`${key} stand for the ${myObject[key]}`);
// }


// forin loop with the arrays
// const myArray  = ["Ahsan Ullah", "Rehman ullah", " Ali Raza"]
// for (const key in myArray) {
//     console.log(`${key} is the number of ${myArray[key ]}`);
// }

// map ki iteration nai hoti h is leye is ky oper ye kaam nia kry ga 
// const map = new Map()
// map.set('IN', "Pakistan")
// map.set('Fr', "France")
// map.set('IN', "Pakistan")
// // console.log(map);
// for (const key in map) {
//     console.log(key);
// }


// foreach loop
// const myArray= ["Ahsan Ullah", "Rehman ullah", "Ali Raza" ,"noshad khan "]
// myArray.forEach((item , index, Array)=> {
//     console.log(item , index, Array);
// });


// array ky ander object ky ander objects ki value access kry h 
const myArray  = [
    {
        languageName: "JavaScript",
        languageshortname: 'js'
    },
    {
        languageName: "c++ ",
        languageshortname: 'PP'
    },
    {
        languageName: "Java",
        languageshortname: 'j'
    },
    {
        languageName: "ruby on rails ",
        languageshortname: 'RB'
    }
]
myArray.forEach ( (index ) =>{
    console.log(index.languageshortname);
})
