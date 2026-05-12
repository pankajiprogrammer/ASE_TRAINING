// print each element

let arr = [1, 2, 3];

arr.forEach((value, index) => {
    console.log(value, index);
});

// double each number

let arr2 = [1, 2, 3];

let result = arr2.map(num => num * 2);

console.log(result); 

// get even numbers

let arr3 = [1, 2, 3, 4];

let even = arr3.filter(num => num % 2 === 0);

console.log(even); 

// sum of array

let arr5 = [1, 2, 3];

let sum = arr5.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(sum); // 6


for (let value of arr5) {
    console.log(value);
}