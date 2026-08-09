function registerStudent (cb) {
    console.log("user is segistering .need more data");
    cb();
}

function userBasicInfo(){
    let student = {
        name: "Azahar" , 
        id: 709,
        class: "3rd semester"
    }
    console.log(student);
    
}
console.log(registerStudent(userBasicInfo));
