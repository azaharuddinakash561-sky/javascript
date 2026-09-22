class User {
  private _name: string;
  private _age: number;
  protected _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

  // get age(){// get a kono urgument pass korta parba na

  //     return this._age;
  // }

  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Age is not valid!");
    }
    this._age = value;
  }
}

class Student extends User {
  private _fee: number;

  constructor (name:string, age: number, email: string, fee: number){
    super(name,age, email)
    this._fee = fee;
  }
}
const student = new Student("Azaahr", 23, "uazahar@gmail.com", 23232);
student.age = 20;
console.log(student.age);
