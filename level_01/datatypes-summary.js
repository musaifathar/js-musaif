// Primitive 

// 7 Types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1145854165486511265n


// Reference ( Non primitive)

// Array, Object, function

const hero = ["perman", "Luckyman", "batman"];
let myObj = {
    name : "Musaif",
    age : 22,

}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);



//-----------------------------------------------------

// Stack ( Primitive), Heap (Non-Primitive)

let myName = "Musaif Athar"

let anotherName = myName

anotherName = "Aman Thakur"

console.log(myName);
console.log(anotherName);

let user = {
    email:"musaifathar@gmail.com",
    pass : "mussu@07"
}

let userTow = user

userTow.email = "google@gmail.com"

console.log(user.email);
console.log(userTow.email);