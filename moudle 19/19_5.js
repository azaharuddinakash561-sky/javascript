const sortDescending = (nums) =>{
    // console.log(nums);
    let num2 = [...nums]
    const sortedNumber = num2.sort((a, b)=>{
        // return a-b; // asceding order
        return b-a  // descending order
    })

    // console.log("sorteNums ->", sortedNumber)
    return sortedNumber
}

// const numbers = [1, 10, 2, 25, 3]
// console.log("numbers before function call: -->",numbers)
// console.log(sortDescending(numbers))// Reference in a function with parameter
// console.log("numbers after function call: -->",numbers)
// problem 2
  const previewDiscount = (cart) =>{


    return cart.map((item)=>{
        item.price = item.price -item.price *0.1;
        return item;
    })
  }

  let cart =[
    {name: "Pen", price: 100},
    {name: "Bag", price: 500}
    
  ] 

  console.log("Before:", cart);
  console.log("preview:" , previewDiscount(cart));
  console.log("after", cart);
  