const user = {
    username: "Musaif",
    price: 999,

    welcomeMassege: function() {
        console.log(`${this.username} , welcome to Your Website`);
        console.log(this);
    }
}

// user.welcomeMassege()
// user.username = "sam"
// user.welcomeMassege()

// console.log(this);

// function chai(){
//     let username = "musaif"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "musaif"
//     console.log(this.username)
// }

const chai = () => {
    let username = "musaif"
    console.log(this)
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "musaif"}) 

console.log(addTwo(4 , 5))


const myArray = [2, 3, 4, 5,]

// myArray.forEach()