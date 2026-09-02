// problem 1,expenstive product  GIVEN A Object OF PRODUCT PRICES USE Object.keys() or object.entries() + loop to find the most expensive product.


// for of use it an object 

// const getMostExpensive = (product)=> {

//     // const keys = Object.keys(product)
//     const keys1 = Object.entries(product)
//     // console.log(product)
//     // console.log(keys)
//     // for (const key of keys) {
//         // console.log(key, product[key])
//     // }
//     for (const key of keys1) {
//         console.log(key, product[key])
//     }
// }

// console.log(getMostExpensive({pen: 20, book: 450, bag: 500}))


// const getMostEx = (product) =>{
//     let keys  = Object.keys(product)
//     // let keys1  = Object.keys(product)
//     let hightPrice = 0;
//     let exProduct = "";
//     // console.log(keys)
//     // console.log(keys1);
//     // use for object
//     for (const key of keys) {

//         if(hightPrice < product[key]){
//             hightPrice = product[key];
//             exProduct = key
//         }
//         // console.log(key, product[keys1]);
        
//     }
//     // console.log(hightPrice , exProduct);
//     return exProduct
    
// } 

// const getMostEx = (product) =>{
//     let keys  = Object.keys(product)
    
//     let hightPrice = 0;
//     let exProduct = "";
    
    
    
    
//     for (const key of keys) {

//         if(hightPrice < product[key]){
//             hightPrice = product[key];
//             exProduct = key
//         }
        
        
//     }  
//     return exProduct
    
// } 

// console.log(getMostEx({pen: 10, book: 333, bag: 500}))


// problem 2


let user = {
    name : "azahar" ,
    address : {
        city: "khulna"
    }
}

let user2 = {
    name: "akash", 
    address: {},
};

const getCity = (user) =>{
    return user.addres?.city
}
console.log(getCity(user));
console.log(getCity(user2));
