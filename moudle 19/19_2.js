/**
 * p1. user lookup by ID
 * findUserById(users, id )-find and return tyhe single user object
 * whose id matches. if no user matches, returns "User not found".
 * 
 * input: 
 *      user = [
 *      {id: 1, name:"rafi"}
 *      {id: 2, name:"kamal"}
 *      {}
 * ]
 * id =2;
 * output: {id: 2, name: "karim"}
 * const user = [
 *      {id: 1, name:"rafi"}
 *      {id: 2, name:"kamal"}
 *      {}
 * ]
 */


// const findUserById = (users, id ) => {
//     let expectedUser = user.find((user)=>{
//         return user.id ===id
//     })
//     if(expectedUser){
//         return expectedUser;
//     }else{
//         return "user not found"
//     }

// };

// const user = [
//       {id: 1, name:"rafi"}, 
//       {id: 2, name:"kamal"},
//       {id: 3, name:"utsho"},
//       {id: 4, name:"rahim"}
      
//  ]

//  console.log(findUserById(user, 3));


//  problem 2
let getCartTotal = (card) =>{
    let total = card.reduce((accumulator, elem)=>{
        console.log(accumulator, elem)
 
        return accumulator+(elem.price *elem.qty)

    }, 0)
    return total;
}

let cart =  [
    {name: "pen", price: 20 , qty: 3},
    {name: "notebook", price: 50, qty: 2}, 
]
// Total = 20*3 + 50*2 = 160
console.log(getCartTotal(card));