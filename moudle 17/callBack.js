// function registerStudent (cb) {
//     console.log("user is segistering .need more data");
//     cb();
// }

// function userBasicInfo(){
//     let student = {
//         name: "Azahar" , 
//         id: 709,
//         class: "3rd semester"
//     }
//     console.log(student);
    
// }
// console.log(registerStudent(userBasicInfo));
function calculate (a, b , cb){
    let sum = a + b;
    cb(sum);
}  

function displayResult (result){
    console.log(result);
    
}
calculate( 5, 4, displayResult)
calculate( 5, 5, displayResult)
