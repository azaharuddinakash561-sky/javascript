// reduce (optional / Advanced)
let nums = [10, 20, 30, 40, 50];
let sum = nums.reduce((accumulator, elem, ind, arr)=>
{
    // console.log(accumulator, elem, ind, arr);
    console.log("accomulator ->",accumulator, "- elem ->", elem, );
    return accumulator + elem;
    // return 500
}, 0)

console.log(sum);
