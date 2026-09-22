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
        this.age = value;
    }
}
const User1 = new User('Azaahr', 23, "uazahar@gmail.com");
User1.age = 20;
console.log(User1.age);
//# sourceMappingURL=geters-setter.js.map