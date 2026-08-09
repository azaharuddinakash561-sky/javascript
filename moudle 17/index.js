// function closure(){
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     }
// }

// let counter = closure();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter);


function cashRegister() {
    let amount = 0;

    return function(payableAmount){
        // console.log(payableAmount);
        amount += payableAmount; //inner function  accessan call
        return amount;
    }
}
let coffeshopCashCounter  = cashRegister();
let restoraCashCounter  = cashRegister();
console.log(coffeshopCashCounter(200));
console.log(coffeshopCashCounter(200));
console.log (coffeshopCashCounter(200));

console.log (restoraCashCounter(50));