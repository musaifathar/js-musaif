// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123asdf"
tinderUser.name = "Musaif"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const rerularUser = {
    email: "mussu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Musaif",
            lastname: "Athar"
        }
    }
}

// console.log(rerularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = { obj1, obj2, obj3 }

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "musaif@gmail.com"
    },
    {
        id: 2,
        email: "musaif@gmail.com"
    },
    {
        id: 3,
        email: "musaif@gmail.com"
    },
    
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const coures = {
    coursename: "html IN hindi",
    price: "1000",
    couresInstructor: "Musaif"
}

// coures.couresInstructor

const {couresInstructor: instructor} = course

// console.log(couresInstructor);

console.log(instructor);

// this is json formet

// {
//     "name": "Musaif",
//     "coursename": "html In hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]