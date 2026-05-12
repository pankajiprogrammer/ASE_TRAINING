// create set

let set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(2); // duplicate ignored

console.log(set1); // {1, 2}



// remove duplicates from array

let arr = [1, 2, 2, 3, 4];

let u_set = new Set(arr);

console.log(u_set); 


// using spread operator

let set = new Set([1, 2, 3]);

let arr1= [...set];

console.log(arr1); 

arr1.push(44)
arr1.push(40)



let s = new Set([10, 20, 30]);

console.log(s.has(20)); // true
console.log(s.has(40)); // false

s.clear()

console.log(s.size); 


for (let value of s) {
    console.log(value);
}