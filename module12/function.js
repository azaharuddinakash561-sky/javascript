// function add (n1, n2){
//     let number = n1 + n2;
//     console.log("sum number is: "+ number);

// }

// add(1, 11);

// function uddin(name) {
//     const full = name + " "+"uddin";
//     return full;
// }
// const nameFull = uddin('Azahar');
// console.log(nameFull)


function price(price, dubble) {
    if(dubble === true){
        const priceduble = price *2;
        return priceduble;
    }else{
        const askingPrice = price / 2;
        return askingPrice;
    }
    
}

const myprice = price(100, true)
console.log(myprice);

const leaderPrice= price(50, false)

console.log(leaderPrice);