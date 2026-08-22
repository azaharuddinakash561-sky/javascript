
// function createCounter (){
//     let counter = 0;
    
//     return function(){

//         counter++;
//         return counter;
//     }
// }
// // ai kanea counter  variable ta function ar moto hoia jai 
// let counter = createCounter()


// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(createCounter());
// console.log(createCounter());
// console.log(createCounter());
// console.log();
// console.log();
// coffeHouse
function cashReg(){
    let cashStore = 0;
    return function(payableCash) {
        cashStore += payableCash;
        return cashStore;
    }
}

let coffeHouse = cashReg();
let pastaHouse = cashReg();
console.log(coffeHouse(400));
console.log(coffeHouse(4060));
console.log(coffeHouse(400));
console.log(pastaHouse(400));
console.log(pastaHouse(400));
console.log(coffeHouse(400));
