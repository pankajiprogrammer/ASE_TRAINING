// 6. Array Flattening (Nested Arrays)

// Problem Statement
// You are given a nested array containing numbers at different depths.
// Write a function to flatten the array into a single array.

// Input
const arr = [1, [2, [3, 4], 5], [6, 7], 8];

// Expected Output
// [1,2,3,4,5,6,7,8]


//--------------------------------------------------- logic one ----------------------------------------------------

const flatarray = arr.flat(Infinity)

console.log(flatarray);



//-------------------------------------------------- logic two --------------------------------------------------


let newarr = arr.toString()


newarr = newarr.split(",");

console.log(newarr);
