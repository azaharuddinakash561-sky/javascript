// const some = () => {

// }
//  const calculateShipping = (orderAmoint, shippingFee = 60)=>{
//     // if(orderAmoint >= 1000){
//     //     return"Free Shipping"
//     // }else {
//     //     return `shipping Fee: ${shippingFee} Taka`
//     // }
//     return orderAmoint >= 1000 ? "Free Shipping" : `Shipping Fee: ${shippingFee} Taka`
//  }
//  console.log(calculateShipping(500, 200));
 


// use greating system

const gratSystem = (mark) =>{
    // if(typeof mark != "number"){
    //     return"Invalid";
    // }
    // if(mark >= 90){
    //     return "A+";
    // }else if(mark >=80){
    //     return "A";
    // }
    // else if(mark >= 60){
    //     return "B";
    // }else{
    //     return "fail"
    // }

    // ternary operater

    // return typeof mark != "number"? "Invalid": mark >= 90 ? "A+" : mark >= 80 ? "A": mark >= 60 ? "B+": "fail"
}

console.log(gratSystem(90))
console.log(gratSystem(75))
console.log(gratSystem(55))
console.log(gratSystem("ninety"))