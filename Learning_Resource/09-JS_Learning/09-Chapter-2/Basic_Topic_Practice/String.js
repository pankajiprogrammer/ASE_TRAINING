// different ways to create strings

let name1 = "pankaj";     // double quotes
let name2 = 'saratkar';   // single quotes
let name3 = `javascript`; // template literals

console.log(name1, name2, name3);



let text = "iprogrammer solution pvt ltd";

console.log(text.length); 


console.log(text[0]); 
console.log(text[4]); 
console.log(text[6]); 
console.log(text[2]); 

console.log(text.toUpperCase()); 
console.log(text.toLowerCase());


// remove extra spaces

let name_1 = "   Pankaj   ";

console.log(name_1.trim()); 


// join strings

let firstName = "pankaj";
let lastName = "saratkar";

let fullName1 = firstName + " " + lastName; 
let fullName2 = `${firstName} ${lastName}`;

console.log(fullName1);
console.log(fullName2);


//Parameters: slice(start, end) accepts a start and end position. substr(start, length) accepts a start position and the total number of characters to extract.
console.log(firstName.slice(0, 4));  
console.log(lastName.substring(2,6));

// convert string to array

let data = "apple,banana,mango";

let result = data.split(",");

console.log(result); 

// repeat text

let word = "Hi ";

console.log(word.repeat(3));



console.log(firstName.charAt(0)); 
console.log(lastName.charAt(4)); 

// add characters at beginning

let num = "5";

console.log(num.padStart(3, "0")); // 005