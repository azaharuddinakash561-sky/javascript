// let numbers = [2, 4, 6, 8, 10];


// let double = []

// for(let i = 0; i < numbers.length; i++){
//     double.push(numbers[i]*2)
// }

// const double = numbers.map(function(elem){
//     return elem * 2;
// });

// use arrow function 
// const double = numbers.map((elem) => elem * 2);
// console.log(double);


// foreach: simply iterate loop

// let rolls = [10, 12, 24, 30];

// rolls.forEach((elem, ind, arr)=>{
//     console.log(elem, ind, arr)
// })


// filter: filter out element and create new array based on condition

let numbers = [100, 200, 300, 400, 500, 600];

// let expensiveProducts = prices.filter ((elem)=>{
//     // if(elem >= 500){
//         // return true
//     // }
//     // return false

//     // short verstion 
//     // return elem >= 500
// })

// short hand  use in filter and find
// let expensiveProducts = numbers.filter ((elem)=> elem >= 500);
// console.log(expensiveProducts);
// let expensiveProduct = numbers.find ((elem)=> elem >= 500);
// console.log(expensiveProduct);


// phone price  to find uprice  and low-price 


// let phone = [
//     {
//         phone: "iphone se", 
//         price: 20000
//     },
//     {
//         phone: "iphone 14e", 
//         price: 40000
//     },
//     {
//         phone: "iphone 15e", 
//         price: 50000
//     },
//     {
//         phone: "iphone 16e", 
//         price: 60000
//     },
//     {
//         phone: "iphone 17e", 
//         price: 70000
//     },
//     {
//         phone: "iphone 18e", 
//         price: 80000
//     }
// ]
// let expensivPhones = phone.filter(phone => phone.price >= 50000);
// // let cheapestPhones = phone.find(phone => phone.price <= 20000);
// let cheapestPhones = phone.find(phone => {
//     console.log(phone);
//     return phone.price <= 20000
// });
// console.log(expensivPhones);
// console.log(cheapestPhones);

let student = [
    {
        name: "azahar",
        roll: 29
    }, 
    {
        name: "akash",
        roll: 40
    }
]
const findStudentinfo = student.find(
    (student) => student.roll === 29
)
console.log(findStudentinfo);

