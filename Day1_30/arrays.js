const array = [1,2,3,4,5,6]


array.push(7);
console.log( array.indexOf(3)); 

const first_array = ["Ahsan ullha", "Noshad khan", "Ali raza"];
const second_array = ["Shoket","yaqoob", "rehman ullah"];
// first_array.push(second_array);

// console.log(first_array);
// console.log(first_array[3][2]);


// const newarry =first_array.concat(second_array);
// console.log(newarry);

const all_Newarray = [...first_array , ...second_array]
console.log(all_Newarray);


