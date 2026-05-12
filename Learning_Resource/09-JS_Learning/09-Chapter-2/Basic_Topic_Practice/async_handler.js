// callback fuction

function welcome(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback
}

function bye() {
  console.log("Bye!");
}

welcome("Pankaj", bye);


function process(num, callback) {
  return callback(num);
}

let result = process(5, x => x * 2);
console.log(result);



function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add));


function fetchData(callback) {
  setTimeout(() => {
    console.log("Data received");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Processing data");
});

// PROMISSE

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise.then((r)=>{
    console.log(r);
})
.catch((e)=>{
    console.log(e);
})
.finally(()=>{
    console.log("complete");
})

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done after 2 sec");
  }, 2000);
});

p.then(res => console.log(res));


let n = new Promise((resolve, reject) => {
  let error = true;

  if (error) {
    reject("Something went wrong");
  } else {
    resolve("Success");
  }
});

n.then(res => console.log(res))
 .catch(err => console.log(err));



 new Promise(resolve => {
  resolve(2);
})
.then(num => {
  console.log(num);
  return num * 2;
})
.then(num => {
  console.log(num);
  return num * 2;
})
.then(num => {
  console.log(num);
});


function login(user) {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      resolve("Login success");
    } else {
      reject("Invalid user");
    }
  });
}

login("admin")
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Always runs"));




// aync /await

async function test() {
  return "Hello";
}

test().then(res => console.log(res));


function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 2000);
  });
}

async function run() {
  console.log("Start");

  let result = await delay();

  console.log(result);
  console.log("End");
}

run();


function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function showData() {
  let data = await getData();
  console.log(data);
}

showData();


function step1() {
  return Promise.resolve("Step 1");
}

function step2() {
  return Promise.resolve("Step 2");
}

async function run() {
  let a = await step1();
  console.log(a);

  let b = await step2();
  console.log(b);
}

run();

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=c01b1afecfb4eac074775446020c0e87


// async function getData(){
//     try{

//         let data = await fetch("link");
//         let full = data.json()
//     }
//     catch(e){
//         console.log(e);
//     }
// }

async function test() {
  try {
    let res = await Promise.reject("Error occurred");
    console.log(res);
  } catch (err) {
    console.log("Caught:", err);
  }
}

test();


async function fetchUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();

    console.log(data);
  } 
  catch (err) {
    console.log("Error:", err);
  }
}

