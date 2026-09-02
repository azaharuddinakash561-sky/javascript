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
 const getGrade = (marks)=>{
    if(marks >= 90){
        return "A+"
    }else if(marks >= 80){
        return "A"
    }
    else if(marks >= 70){
        return "B+"
    }
    else if(marks >= 60){
        return "B"
    }else {
        return "fail"
    }
 }
    const modifiedStudents = students.map(student =>{

        console.log(student, "student")

        const {name, marks} = student;

        const newStudentwithGrade= { name, marks, grade: getGrade(marks)};
        return newStudentwithGrade;
    })
    console.log(modifiedStudents , "modifieStudents");
    
};

let students = [
    {name: "rafi", marks : 44}, 
    {name: "kamal", marks : 84}, 
    {name: "kamal", marks : 94}, 
    {name: "kamal", marks : 74}, 
    {name: "kamal", marks : 64}, 
]

console.log(addGrade(students)) ;

console.log(students);