// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})(); // ; is imp for two IIFE

( (name) => {
    console.log(`DB Connected Two ${name}`);
})(`musaif`)