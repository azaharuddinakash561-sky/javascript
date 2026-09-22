"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }
    // get age(){// get a kono urgument pass korta parba na
    //     return this._age;
    // }
    set age(value) {
        if (value < 0 || value > 100) {
            throw new Error("Age is not valid!");
        }
        this._age = value;
    }
}
class Student extends User {
    _fee;
    constructor(name, age, email, fee) {
        super(name, age, email);
        this._fee = fee;
    }
}
const student = new Student("Azaahr", 23, "uazahar@gmail.com", 23232);
student.age = 20;
console.log(student.age);
//# sourceMappingURL=inharitance.js.map