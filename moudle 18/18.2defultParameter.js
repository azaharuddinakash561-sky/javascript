/**
 * problem 1 : flexible Total Calculator
 * calculateTotal(...prices) using rest params, sums any number of
 * prices, with a default discount = 0
 * 
 * Example:calculateTotal(0, 100, 200, 300) ->>600
 * Example:calculateTotal(10, 100, 200) -> 270(10 = discount%)
 
 */

// use rest or spread operater 

// function calculateTotal(discount, ...prices){
    // console.log(discount, prices)

    // let total = 0;
    // for(let i = 0; i <prices.length; i++){
    //     total += prices[i];
    // }
    // reduce use 

    // let total = prices.reduce((acumulator, currentValue)=> acumulator + currentValue, 0)
    // let discountAmount = (total *discount) / 100;
    // // console.log(discountAmount)
    // let totalAfterDiscountApply = total - discountAmount;
    // return totalAfterDiscountApply;
    // console.log(total);
// }

// console.log(calculateTotal(10 , 100, 200, 50, 300));



let a1 = [ 1,2, 3,4,5, 5, 6,6,]
let a2 = [ 1,4, 8,4,5, 5, 6,6,]

let mArray = [...a1, ...a2]
// let newArr = new Set(mArray) //1st method
// let newArr = [...new Set(mArray)] // 2nd method
// let newArr = Array.from(new Set(mArray)) // 3nd method
console.log(newArr);

// console.log(mArray);
