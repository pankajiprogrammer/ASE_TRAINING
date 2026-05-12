console.log("Script Loaded");


const output = document.getElementById("output")
const loopbutton = document.getElementById("loop");
const asyncbutton = document.getElementById("async")
const submitbutton = document.getElementById("submit");
let user ="user_1"
var info = "link"

function handleClick() {
  

  let name = document.getElementById("name").value;

  if (!name) {
    console.error("Name is empty");
    alert("Enter name");
    return;
  }

  runLoop()

  let message = WelcomeUser(name);
  output.innerText = message;
}


function WelcomeUser(name) {
  return CorrectMessage(name);
}

function CorrectMessage(name) {
  return "Hello " + name.toUpperCase();
}


function runLoop() {
  for (let i = 0; i < 5; i++) {
    console.log("Loop:", i);

    if (i === 3) {
      console.log("Breaking at 3");
      break;
    }
  }
}


function asynfunction() {
  console.log("Start async");

  setTimeout(() => {


    let data = fetchData();
    console.log("Async Data:", data);
  }, 2000);

  console.log("End async");
}


function fetchData() {
  let arr = [1, 2, 3];
  return arr[0].toUpperCase()
}

loopbutton.addEventListener("click", runLoop);

asyncbutton.addEventListener("click", asynfunction);

submitbutton.addEventListener("click", handleClick)