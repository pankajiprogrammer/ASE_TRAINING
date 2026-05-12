
console.log(Math); // shows all math functions

// round to nearest integer

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// round down
console.log(Math.floor(4.9)); // 4


// round up
console.log(Math.ceil(4.1)); // 5

// remove decimal part
console.log(Math.trunc(4.9)); // 4



console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

// random number between 0 and 1
console.log(Math.random());

// 1 to 10
let rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);


console.log(Math.pow(2, 3)); // 8


console.log(Math.sqrt(16)); // 4


console.log(Math.abs(-10)); // 10


let arr = [10, 50, 20];

let max = Math.max(...arr);

console.log(max);