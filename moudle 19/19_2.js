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


const findUserById = (users, id ) => {
    let expectedUser = user.find((user)=>{
        return user.id ===id
    })
    if(expectedUser){
        return expectedUser;
    }else{
        return "user not found"
    }

};

const user = [
      {id: 1, name:"rafi"}, 
      {id: 2, name:"kamal"},
      {id: 3, name:"utsho"},
      {id: 4, name:"rahim"}
      
 ]

 console.log(findUserById(user, 3));
 