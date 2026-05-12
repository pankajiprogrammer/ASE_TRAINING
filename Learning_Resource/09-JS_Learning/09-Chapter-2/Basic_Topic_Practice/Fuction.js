// simple function

function welcome() {
    console.log("Hello Pankaj"); 
}

welcome(); 


// function with input values

function add(a, b) {
    return a + b; 
}

let result = add(10, 5);

console.log(result); // 15


// default value if argument not passed

function hellouser(name = "Guest") {
    console.log("hello " + name);
}

hellouser()
hellouser("pankaj")


// function stored in variable

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// function without name

let hy = function() {
    console.log("pankaj this side ");
};

hy();


// arrow function syntax

const add_1 =(a, b) =>{
    return a + b;
};

console.log(add_1(3, 7)); // 10

// without return keyword

const square = x => x * x;

console.log(square(5)); // 25


// single parameter 

const intro = name => console.log("Hello " + name);

intro("Pankaj");



const checknum = (num) => {
    
    if (num % 2 === 0) {
        return "Even";
    } 
    else {
        return "Odd";
    }
};

console.log(checknum(10));


// this fuction help me to learn about closoure in js

function outer(){

    let outervar = "I am from outer fuction";

    function inner(){
        console.log(outervar);
        outervar = "outer var is chnaged by inner function";

        let innervar = "i am from inner fuction";
        console.log(innervar);
        console.log(outervar);
    }

    return inner
}

const inner = outer();

inner()


// counter fuction to learn closure in js

function counter(){

    let counter = 0;

    function increment(){
        counter++;
        console.log(counter);
    }

    return increment ;
}


const incrementc = counter();

incrementc();
incrementc();
incrementc();


function add_num(a){

    return function(b){
        return a+b;
    }
}


const add_5 = add_num(5);

console.log(add_5(10)); // 15

function create_timer(){

    for(let i=1; i<=3; i++){

        setInterval(()=>{
            console.log(`Timer : ${i} `);
        }, i*1000);
    }
}

create_timer()