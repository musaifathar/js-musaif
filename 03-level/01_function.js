

function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("S");
    console.log("A");
    console.log("I");
    console.log("F");

}

// sayMyName()

// function addTwoNumber(number1 , number2 ){

//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    
    let result = number1 + number2
    return number1 + number2
}

const result = addTwoNumber(3 , 7)

console.log("result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("musaif"));

function calculateCartPrice(vlu1, vlu2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000))

const user = {
    username: "musaif",
    prices:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)

handleObject({
    username: "san",
    price: 999
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));

