// const addGrade = (students)=>{
// console.log(students)
//     students[0].name = "Rafi 2"
//     students[2] = {Fullname: "azahar"}
//     const students2 = [...students]
//     console.log(students2)
// };

// let students = [
//     {name: "rafi", marks : 434}, 
//     {name: "kamal", marks : 834}, 
// ]

// console.log(addGrade(students)) ;

// console.log(students);

const addGrade = (students)=>{
    const modifiedStudents = students.map(student =>{
        console.log(student, "student")
        return{
            testL: "dummy"
        }
    })
    console.log(modifiedStudents);
    
};

let students = [
    {name: "rafi", marks : 434}, 
    {name: "kamal", marks : 834}, 
]

console.log(addGrade(students)) ;

console.log(students);