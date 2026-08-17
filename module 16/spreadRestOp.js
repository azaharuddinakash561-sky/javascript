// let num = [10, 20, 30, 40, 50];
// console.log(num);

// console.log(...num)

// let numbers = [10, 20, 30];

// let newNumbers = [...numbers, 40, 50];

// console.log(newNumbers);

// let student = {
//     name: "azahar", 
//     id : 798
// }
// let studentMore= {
//     ...student, 
//     blood: "B+"
// }
// console.log(studentMore)

// let arr= [1, 3, 4, 5,6,6]

// let arr2 = [...arr, 8,9]
// arr.push(7)
// console.log(arr)
// console.log(arr2)
// console.log(...arr2)

// rest oparation
function sum(a, b, c, ...restNumber) {
    // console.log(restNumber);
    let sum = 0
    for (const number of restNumber) {
        sum += number
    }
    return a+ b+ c + sum;
}


console.log(sum(3, 4, 5, 34, 54, 33, 54, 5,66,77,));

