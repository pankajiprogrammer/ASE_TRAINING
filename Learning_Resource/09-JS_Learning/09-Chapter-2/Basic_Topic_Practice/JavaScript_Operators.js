// Arithmetic Operators


let a = 10;
let b = 3;

console.log("addition:", a + b);        // 13
console.log("subtraction:", a - b);     // 7
console.log("multiplication:", a * b);  // 30
console.log("division:", a / b);        // 3.33
console.log("modulus:", a % b);         //  1
console.log("exponent:", a ** b);       // 1000


// Assignment Operators

let x = 5;  

x += 3; 
console.log("+= :", x); // 8

x -= 2; 
console.log("-= :", x); // 6

x *= 2; 
console.log("*= :", x); // 36

x /= 3;
console.log("/= :", x); // 12



// Comparison Operators

let num1 = 10;
let num2 = "10";

console.log(num1 == num2);   // true 
console.log(num1 === num2);  // false 
console.log(num1 != 5);      // true
console.log(num1 !== "10");  // true
console.log(num1 > 5);       // true
console.log(num1 < 5);       // false
console.log(num1 >= 10);     // true
console.log(num1 <= 9);      // false


// Logical Operators

let age = 20;
let online= true;

// AND →
console.log(age > 18 && online); // true

// OR 
console.log(age < 18 || online); // true

// NOT 
console.log(!online); // false


// condition ? true : false

let marks = 75;

let result = (marks >= 40) ? "Pass" : "Fail";

console.log(result); // Pass