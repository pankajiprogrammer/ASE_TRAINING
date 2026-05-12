// JSON data 

let jsonData = `{
    "name": "Pankaj",
    "age": 22,
    "city": "Pune"
}`;

// parse JSON

let obj = JSON.parse(jsonData);

console.log(obj.name); // Pankaj



let user = {
    name: "Pankaj",
    age: 22
};

let json = JSON.stringify(user);

console.log(json);


// array inside JSON

let data = `{
    "name": "Pankaj",
    "skills": ["HTML", "CSS", "JavaScript"]
}`;

let obj_1 = JSON.parse(data);

console.log(obj_1.skills[0]); // HTML



let data_1 = `{
    "skills": ["JS", "React", "Node"]
}`;

let obj_2 = JSON.parse(data);

obj_2.skills.forEach(skill => {
    console.log(skill);
});


let users = [
    { name: "Pankaj", age: 22 },
    { name: "Amit", age: 24 }
];

users.forEach(user => {
    console.log(user.name, user.age);
});


// nested JSON

let data_2 = `{
    "name": "Pankaj",
    "address": {
        "city": "Pune",
        "pin": 411001
    },
    "skills": ["JS", "React"]
}`;

let obj_4 = JSON.parse(data_2);

console.log(obj_4.address.city);


let students = [
    { marks: 50 },
    { marks: 70 },
    { marks: 80 }
];

let total = students.reduce((sum, s) => sum + s.marks, 0);

console.log(total);