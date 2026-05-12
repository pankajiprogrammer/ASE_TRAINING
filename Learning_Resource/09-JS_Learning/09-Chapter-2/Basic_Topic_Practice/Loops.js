// print numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i); 
}

// find sum of numbers from 1 to 5

let sum = 0; 

for (let i = 1; i <= 5; i++) {
    sum += i; 
}

console.log("total sum:", sum); // 15

// print numbers from 1 to 5

let i = 1; 

while (i <= 5) {
    console.log(i); 
    i++; 
}

// print numbers from 1 to 5

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);


// stop loop when number is 3

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i); 
}

// skip number 3

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i); 
}

// print even numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}