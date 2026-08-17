function changeObj(obj) {
    obj.name = "changed"
}

let persone = {name: "azahar"};// a object  to reference and it obj store

changeObj(persone);
console.log(persone.name);

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);