class  Student {
    name: string
    age: number
    grade: string
    marks: number 

    constructor(name: string, age: number, grade: string, marks: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.marks = marks;
    }
}
// instantitiatc
// instance of the class
const rafi = new Student("Rafi", 22, "B", 150000)
const john = new Student("John", 20, "A", 120000)
console.log(rafi)
console.log(john)