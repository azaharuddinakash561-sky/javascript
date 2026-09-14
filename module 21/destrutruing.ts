const user : { name: string; age: number; isAdmin: boolean } = {        
    name: "Alice",
     age: 30,
      isAdmin: true 
};


// const age = user.age;
// const name = user.name; 

const { age, isAdmin : adminSTatus } = user;

const userInfo =  ["Rohomot Ali", 25];

const [userName, userAge] = ["Rohomot Ali", 25];