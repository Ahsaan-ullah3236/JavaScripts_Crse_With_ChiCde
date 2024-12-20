// const thunder = new Object()
// thunder.name = "ahsan khan ";
// thunder.id = "123dsfs";
// thunder.mail = "ajsan6377202@gmail.com";
// console.log(thunder);

// const regularUser = {
//     email: "ahsan6377202@gmail.com",
//     full_name: {
//         user_fullname: {
//             firstname: "Ahsan ullah",
//             lastname: "khan g ",
//         }
//     }
// }
// console.log(regularUser(...user_fullname));

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign(obj1,obj2,obj4)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// const thunder = {}
// thunder.name = "ahsan khan ";
// thunder.id = "123dsfs";
// thunder.mail = "ajsan6377202@gmail.com";
// console.log(Object.keys(thunder));
// console.log(Object.values(thunder));

// const course = {
//   name: "ahsan khan ",
//   Price: "9999",
//   courseInstroctor: "ajsan6377202@gmail.com",
// };
// function handleobject(anyobject) {
//   console.log(
//     `My name is ${anyobject.name} and my charger price is ${anyobject.Price} and my emial is ${anyobject.courseInstroctor}`
//   );
// }
// console.log(handleobject(course));




// const myarray = [200,300,400,500,2]

// function  retunrsecondValue(getArray) {
//     return getArray[0][1];
// }
// console.log(retunrsecondValue(myarray));

const  myArraylist= [1,1,1,1,2,2,2,2,3,3,3,4,4,5,6,6,6,6,7,8,9,9,9,9];

let finduniqueArray = [...new Set(myArraylist)]
console.log(finduniqueArray);
