// we do chaineing  

let getExpensiveItemsTotal = (cart, minPrice)=>{
 let total = 0  
 
 for (const product of cart) {
    console.log(product, minPrice)
    if(product.price >= minPrice){
        total += product.price * product.qty;
    }
 }
 console.log(total)
}

let cart = [
    {name: 'pen', price: 20, qty: 3}, 
    {name: 'Headphone', price: 800, qty: 1}, 
    {name: 'notebook', price: 50, qty: 2}, 
    {name: 'watch', price: 1500, qty: 1}, 

]

console.log(getExpensiveItemsTotal(cart, 500));