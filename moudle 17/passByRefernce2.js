// function changeValue(num) {
//     num = 100;
    
// }
// let a = 10 ;
// changeValue(a);
// console.log(a);
// console.log(changeValue(a));
// ---------------------------------------------
// pass by value (pass by primitive data type)
let name = "azahar"
let age = "26"

function myFunction(myName, myAge) {
    myName = "md. azahar uddin akash"

    myAge = "45"
    console.log(myName, myAge);

    return {
        myName, 
        myAge
    }
    
}

console.log(myFunction(name, age));
// upor ar variable ar data show kora
// console.log(name, age);

// pass by reference (pass by referencial data type)

// let student = {
//     name: "azahar", 
//     age : 24
// }

// function myFunction2(data){
//     data.name = "Md. Azahar Uddin Akash"
//     console.log(data);
    
// }

// myFunction2(student)
// console.log(student)