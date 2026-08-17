//  react js a mostly use this destructuring


// array or object 2 ta ta ee kora jai 
// const  num = [1, 3, 4,5,6,7]
// const five= num[3];
// console.log(five)

// console.log(num[1]);
// array destructuring000
// const number = [1, 2, 3, 4, 5, 6, 7];
// const [one, ,three, ,,,seven]= number;
// console.log( one, three, seven)

// object destructuring--------------------
const student = {
    name: "azahar",
    ageL: 34, 
    roll: 3434,
    marks: {
        physics: 95, 
        philosophy: 61, 
        math: 44
    }
   
    
}

const {ageL, name: fullName,marks:{physics, math} } = student;
const name = student.name;
const roll = student.roll;

const marksAcces = student.marks.math

// console.log(name)
// console.log(roll)
// console.log( student)
// console.log( marksAcces)

console.log(ageL , fullName, physics, math)



