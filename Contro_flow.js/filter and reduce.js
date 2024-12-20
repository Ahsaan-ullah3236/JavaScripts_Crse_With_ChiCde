// const myArray = ["Ahsan Ullah", "Rehman ullah", " Ali Raza"]
// const newValues = myArray.forEach(item => {
//     return item;
// });
// console.log(newValues);

// const myNums = [1,2,3,45,6,7,7,8,9,10,0];
// const myNewNumber = myNums.filter ((num) => {
//      return num >= 6;
// });
// console.log(myNewNumber);

const books  = [
    {
        title: "book one" , genre: " fiction" , Publish: 1981, edition: 2004,
    },
    {
        title: "book two" , genre: " History" , Publish: 1991, edition: 20014,
    },
    {
        title: "book Three" , genre: "Science" , Publish: 2001, edition: 2018,
    },
    {
        title: "book four" , genre: "Science" , Publish: 2001, edition: 2008,
    },
    {
        title: "book five" , genre: "history" , Publish: 1981, edition: 2018,
    },
];

const myNewbooks =  books.filter( (bk) => {
    return bk.edition  >= 2000 && bk.genre ==="Science" ;
});
console.log(myNewbooks);