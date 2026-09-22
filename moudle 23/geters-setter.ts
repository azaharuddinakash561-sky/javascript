class User {
    private _name: string
    private _age: number
    private _email: string

    constructor(name:string, age: number, email:string){
       this._name = name
       this._age = age
       this._email = email

    }

    // get age(){// get a kono urgument pass korta parba na 

    //     return this._age;
    // }

    set age(value: number){
        if(value<0 || value>100){
            throw new Error("Age is not valid!")
            
        }
        this.age = value
    }
}
const User1 = new User('Azaahr', 23, "uazahar@gmail.com")
User1.age = 20;
console.log(User1.age)