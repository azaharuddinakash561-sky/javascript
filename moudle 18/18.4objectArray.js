// const responseExtractor = (obj) =>{

//     const {user:{name:userName, age=18 }} = obj
//     // console.log(obj)
//     // console.log(name)
//     console.log(userName, age)
//     // console.log(user)
// }

// console.log(responseExtractor({user: {name: "Azahar", age: 25}}));
// console.log(responseExtractor({user: {name: "Azahar"}}));

const responseExtractor2 = (obj)=>{
    const {user:{
        name:fullName, age= 18
    }} = obj
    console.log(fullName, age);
    
}

console.log(responseExtractor2({user: {name: "Azahar", age: 32}}))

// variable swipe 
// tredational solve
let a = 5;
let b  = 2;
let temp = a;
// a = b;
// // b = a;
// b = temp;
// console.log(a, b)
// destructuring concept use 
[b, a]=[a, b]


// new array use and seperate show number in nu and disturting

let nu  = [10, 22, 33, 4,4,55, 66,6]

let [protom, deteo ,...newArr] = nu;

console.log(protom, deteo,newArr)