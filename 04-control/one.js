//if

const isUserLoggedIn = true

const temperature = 44

if ( temperature === 40){
    console.log("less then 50");
} else {
    console.log("Gerter than 50")
}

// console.log("Execute") console run hoga hi hoga buz ye if condition ke bahar hai !

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100){
    let power = "fly"
    console.log(`user Power: ${power}`);
}

    // console.log(`user Power: ${power}`); unexpected wrong

    const blc = 1000 

    // if (blc > 500) console.log("test"),console.log("test2"); its not true way bad habbit

    if (blc < 500) {
        console.log("less then 500");
    }else if (blc < 700) {
        console.log("less than 700");
    }else if (blc < 999) {
        console.log("less then 999");
    }else  {
        console.log("gretter then 1000");
    }

    const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}