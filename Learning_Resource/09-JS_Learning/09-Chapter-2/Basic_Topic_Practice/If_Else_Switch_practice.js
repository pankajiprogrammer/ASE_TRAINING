// check if number is positive

let num = 10; 

if (num > 0) {
    console.log("Number is positive"); // runs if condition is true
}


// check even or odd

let number = 7; 

if (number % 2 === 0) {
    console.log("even number"); 
} 

else {
    console.log("odd number"); 
}


// check grade based on marks

let marks = 85; 

if (marks >= 90) {
    console.log("grade A");
} 
else if (marks >= 75) {
    console.log("grade B");
} 
else if (marks >= 50) {
    console.log("grade C");
} 
else {
    console.log("fail");
}


// print day name

let day = 2; 

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");
}