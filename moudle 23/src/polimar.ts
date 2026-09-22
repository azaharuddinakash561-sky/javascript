class Animal {
    private _name : string;

    constructor(name:string){
        this._name = name
    }

    makeSount(): void{
        console.log("animal can make sound")
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name)
    }
    makeSount(): void {
        console.log("meoooooooooooooooow")
    }
}



class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    makeSount(): void {
        console.log("whooof")
    }
}

const cat = new Cat("Cat")
cat.makeSount()

const dog = new Dog("Dog")
dog.makeSount()