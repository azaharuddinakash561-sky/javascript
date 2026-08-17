// const  user = {
//     name: "azahar", 
//     age: 23, 
//     id: 20203
// }

// const keys = Object.keys(user)
// const values= Object.values(user)
// const entries= Object.entries(user)
// // console.log(keys);
// // console.log(values);
// // console.log(entries);
//   for (const elm of keys) {
//     console.log( elm, user[elm]);
    
//   }
// // delet method
//   delete user. age

//   console.log(user)

const bAcount ={
    accountNumber = "23242a", 
    bank : 500
}
bAcount.accountNumber = 1234

Object.seal(bAcount)
delete bAcount.bank
console.log(bAcount)