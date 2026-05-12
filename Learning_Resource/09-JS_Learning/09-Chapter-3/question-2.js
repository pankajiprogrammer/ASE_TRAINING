// 2. Find Second Highest Salary

// Problem Statement
// Given an array of employee objects, write a function that returns the second highest salary.

// Input

const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 70000 },
  { name: "Neha", salary: 65000 },
  { name: "Priya", salary: 80000 },
  { name: "Vikram", salary: 70000 }
];


// Expected Output
// 70000



// -----------------------------------------------  Main Logic -----------------------------------------------------

// In this logic i used for each loop and first find first highest salary and then on the basis of them find second highest


// Here find fist highest

let firsthighest = -Infinity;

employees.forEach( (e) =>{


    if(e.salary > firsthighest){

        firsthighest = e.salary;
    }

});

// here find second highest

let secondhighest = -Infinity;
let ename = '';

employees.forEach( (e) =>{


    if(e.salary > secondhighest && e.salary < firsthighest){

        secondhighest = e.salary;
        ename = e.name
    }

});


console.log(`Second Highest Salary of employee is ${ename} with salary ${secondhighest}`);


//------------------------------------------------ Second logic for this ----------------------------------------


// in this logic i find second highest in single loop with condition base

let firsth = -Infinity;
let secondh = -Infinity;


employees.forEach((e) =>{

    if(e.salary > secondh && e.salary > firsth){
        firsth = e.salary;
    }

    else{
        secondh = e.salary;
       
    }
})


console.log(`Second Highest Salary of employee is  ${secondh}`);