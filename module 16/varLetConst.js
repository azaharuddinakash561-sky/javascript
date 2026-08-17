/* es5 relied on nested call backs and long 
function expression , 
making code hard to read and maintain

** nesten call back function 
**no block scoping 
**no native module system 
** clunky oop syntax 
**awkward string handling 
**weak async handling 
*/ 

// if(true){
//     let so = "text"
//     const so2 = "text"
//     var so3 = "text"
// // its maintent block so it accesesable inside C.L
//     console.log(so);
    
// }
// console.log(so);
// function can to accesesable function block outside
function some(){
    let so = "text"
    const so2 = "text"
    var so3 = "text"
    console.log(so);
    console.log(so3);
}

some() 
