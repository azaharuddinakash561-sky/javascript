let someLetter = "My name is Azahar uddin Akash";
let size = someLetter.split("");
let reversetext = size.reverse();
let makeString = reversetext.join(" ")
console.log(makeString);
// console.log(reversetext);
// console.log(size);
const commitment = 'i will work hard and will never give up.';
const reverseParts = commitment.split('');
const reversedCommitment = reverseParts.join('')
console.log(reversedCommitment);
// for of use
let reverseCom= ''; 
for (const letter of commitment){
    reverseCom = reverseCom + letter;
    console.log(letter ,"=>", reverseCom);
}