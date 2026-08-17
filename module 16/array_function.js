// // generaly function
// function sayGreet(name) {
//     return `hello ${name}, good morning.`
// }

// console.log(sayGreet("azahar"));
// // 1 line ar statement takla  para meter ar parentises na dela ooo hoba
// const greet2 = (name) =>{
//     return `My Father name: ${name}.`
// }
// // multipale line ar jono use case 
// const greet2 = (name) =>{
//     return `My Father name: ${name}.`
// }
// console.log(greet2("Shafique"))

// // eakta variable ar moto likta hoba arrow function likta
// // single line ar jono arrow use case
// let greet = (name) => `hello ${name}, good morning.`;
// console.log(greet("azahar"))

const student= {

    name: "azahar", 
    age :25, 
    showName: function () {
        // console.log(this);
        return `Name: ${this.name} age: ${this.age}`;
    },
// this use case in arrow function not allow and it use opject variable name 
    showMe: () => {
        // console.log(this);
        return `Father Name: ${student.name} age: ${student.age}`;
    }
}

console.log(student.showName())
console.log(student.showMe())
