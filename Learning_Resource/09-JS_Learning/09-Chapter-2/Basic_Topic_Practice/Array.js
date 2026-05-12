// different ways to create array

let arr1 = [1, 2, 3, 4];       
let arr2 = new Array(5, 6, 7);  

console.log(arr1, arr2);



console.log(arr1[0]); 
console.log(arr2[2]); 



let numbers = [1, 2, 3];

numbers[1] = 10;
numbers[3] = 4;  

console.log(numbers);

numbers.push(5)

numbers.pop()


numbers.unshift(1); // add at start
numbers.shift();    // remove first


for (let value of numbers) {
    console.log(value);
}

// modifies original array

let arr = [1, 2, 3,4
];


console.log(arr.slice(1, 3)); // [2,3]

arr.splice(1, 1); // remove 1 element

console.log(arr); // [1,3]

arr.sort();    
arr.reverse(); 

console.log(arr);

console.log(arr.includes(2)); // true

console.log(arr.indexOf(4)); // 1


let arr_4= [10, 20, 30];

let result = arr_4.find(x => x > 15);

console.log(result); // 20


let arr_3 = [1, [2, 3], [4, [5]]];

let flat = arr_3.flat(Infinity);

console.log(flat);


let result_2 = arr.find(x => x > 1);
console.log(result_2);


arr.sort((a, b) => a - b);

arr.reverse();


let str = "hello";
let arr_5 = Array.from(str);
