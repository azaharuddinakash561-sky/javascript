// let student = {
//     name : "azahar", 
//     age :29
// }

// function myFunc(data) {
//     data.name = "Azahar Uddin Akash";
//     data.age = 28;
//     console.log(data);
    
// } 
// myFunc(student)
// console.log(student);


// eak ta object ar takea valu reference pass kora 
// let student = {
//     name: "Akash", 
//     age: 28
// }

// function myFunc2 (data){
//     data.name = "Md Azahar Uddin Akash";
//     data.age = 29;
//     // function ar argument pass kora
//     console.log(data);
// }

// myFunc2(student);
// console.log(student);
// pass by valu pass kora hocea varable taka 

let name = "azahar";

let age = 26;

function myfunc3(myName, myAge) {
    myName = "Md.Azahar Uddin Akash";
    myAge = 29;
    console.log(myName, myAge);
}
myfunc3(name, age);
console.log(name , age);
