// singleton
// Object.create


// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Musaif",
    "full name": "Musaif Athar",
    [mySym]: "myKey2",
    age: 22,
    address: "kamptee",
    email:"musaif@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "sunday"]
}

 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]);

JsUser.email = "musaif@gmail.com"
// object.freez(JsUser)
JsUser.greeting = function(){
    console.log("hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());