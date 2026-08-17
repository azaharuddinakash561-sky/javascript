// name = "world "ai ta default vabea parameter use 
// kora hoi karon function call korar 
// somai jode name ba kono kesu  na dai 
// tahola defult vabea para meter
// ar valu pass korba
function greet(name = "world") {
    return "Hello , " + name ; 
}

console.log(greet("Akash"));
console.log(greet(""));
console.log(greet());
function makeCoffee(suger = 1) {
    return "coffee is preper " + suger + " spoon suger";

}

console.log(makeCoffee(2));
console.log(makeCoffee("_"));
console.log(makeCoffee());
