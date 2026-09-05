// we do chaineing  

let getExpensiveItemsTotal = (cart, minPrice)=>{

    let totalTaka = cart.filter(product => product.price >= minPrice).map(product =>product.price * product.qty).reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    // let filterProducts = cart.filter(product => product.price >= minPrice);
    // console.log(filterProducts)
    // let modifiedProducts = filterProducts.map(product =>product.price * product.qty);

    // let total = modifiedProducts.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)

    // console.log(modifiedProducts) 
    // console.log(total) 
    console.log(totalTaka) 

//  let total = 0  
 
//  for (const product of cart) {
//     console.log(product, minPrice)
//     if(product.price >= minPrice){
//         total += product.price * product.qty;
//     }
//  }
 
}

let cart = [
    {name: 'pen', price: 20, qty: 3}, 
    {name: 'Headphone', price: 800, qty: 1}, 
    {name: 'notebook', price: 50, qty: 2}, 
    {name: 'watch', price: 1500, qty:2}, 

]

console.log(getExpensiveItemsTotal(cart, 500));