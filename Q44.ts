// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered.
//Call the function three times, using a different number of arguments each time.

function makinng_sandwich(...items:string[]) {
    return `I want these ${items} in my sandwich`
}

console.log(makinng_sandwich("Tomato","Onion"));
console.log(makinng_sandwich("ginger","Garlic"));
console.log(makinng_sandwich("Tomato","cheese"));