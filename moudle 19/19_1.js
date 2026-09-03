/*
problem 1: bulk Discount Applier
applydiscount (price, rate) -apply a discount % to every price in 
the array and return a new array. the Original prices Array must
 stayexactly the same

 input: 
 prices = [500, 1000, 250]
 rate = 10 (10% discount)

 output [450, 900, 225]

 original prices array must remain [450, 900, 225] ofterwards
*/

// const applyDiscount = (price, discountRate = 10) => {
//   let priceAfterDiscount = price.map((elem, ind, arr) => {
//     console.log(ind, elem);
//     const discountPrice = elem - (elem * discountRate) / 100;
//     return discountPrice;
//   });
//   console.log(priceAfterDiscount);
// };
// let productPrices = [500, 1000, 250, 400, 700];
// console.log(applyDiscount(productPrices));
// problem 2

let getPassingStudents = (students, threshold) => {
  let filteredStudents = students.filter(student=>{
    console.log(student)
    if(student.marks >= threshold){
      return true
    }else{
      return false
    }
    // if(student.name ==="Rafi") return true
    // return false
  })

  console.log(filteredStudents);
}

let students = [
  {name: "Rafi", marks: 75},
  {name: "karim", marks: 40},
  {name: "utsho", marks: 60},
  {name: "Akash", marks: 59},
  {name: "Rafi", marks: 75},
]

console.log(getPassingStudents(students, 50))