// 4. Find Missing Number in Sequence

// Problem Statement
// Given an array of numbers from 1 to N, one number is missing.
// Write a function to find the missing number.


// Input
const numbers = [1,2,3,4,6,7,8];

// Expected Output
// 5


// ------------------------------------------------- logic 1 ------------------------------------------------------

let sum = numbers.reduce((acc,x) =>{

    acc+=x;

    return acc;

}, 0);

let n_num =  numbers.at(-1);

let n_sum = n_num*(n_num+1)/2

console.log(`Missing Number in sequence is ${n_sum - sum}`);


// --------------------------------------------------------- logic 2 ---------------------------------------

let i = 1;

for(const j in numbers){

    if(i == numbers[j]){
        i++;

    }

    else{

           console.log(`Missing Number in sequence is ${i}`);
           break;
    }
}