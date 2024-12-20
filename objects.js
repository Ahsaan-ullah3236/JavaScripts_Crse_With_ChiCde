// singleton
// objec.create


// object literals 
const mysym = Symbol ("key1")
const js_user = {
    name: "ahsan khan",
    location:"Lahore",
    [mysym] : "key1",
    value: 3,
    mail:"ahsan6377202@gmail.com",
    myarra: ["ahsan", "rehman","noshad"]
}
// console.log(js_user.mail);
// console.log(js_user["mail"]);
// console.log(js_user.myarra);
console.log(js_user.myarra[2]);
console.log(js_user[mysym]);
