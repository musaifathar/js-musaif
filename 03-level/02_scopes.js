// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("inner" , a); 
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "musaif"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); not posibal child parent se value le sakta hai parent child se nhi !

    two()
}
// one()

if (true) {
    const username = "musaif"
    if (username === "musaif") {
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website); not work
}

// console.log(username); not work



//---------------->intersting<------------//

console.log(addone(5));

function addone(num){
    return num + 2

}

// addTwo(5) this way not working

const addTwo = function(num){
    return num + 5
}

console.log(addTwo(5));