// object with properties (key-value pairs)

let p = {
    name: "Pankaj",   // property
    age: 22,
    city: "Pune"
};

console.log(p);



// dot notation
console.log(p.name);

// bracket notation
console.log(p["city"]);


p.height = 22; // add property
p.id = "PK"; // update property

console.log(p);

delete p.age;

console.log(p);


// method = function inside object

let person = {

    name: "Pankaj",

    help: function() {
        console.log("Hello " + this.name); // using this
    }
};

person.help();

// calculator object

let calculator = {

    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.sub(10, 5));

console.log(p.keys(obj));  
console.log(p.values(obj));  
console.log(p.entries(obj)); 