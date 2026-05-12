// setTimeout() setTimeout(function, delay, arg1, arg2...);


setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);


console.log("code start");

setTimeout(() => {
  console.log("set time out execute after 1 sec");
}, 1000);

console.log("code end");


// clearTimeout()


let id = setTimeout(() => {
  console.log("stop");
}, 2000);

// stop the timeout fuction

clearTimeout(id);

//setInterval()

let id_2 = setInterval(() => {
  console.log("Running in every 1 sec");
}, 1000);

clearInterval(id_2);


let count = 5;

let id_3 = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(id_3);
    console.log("Done!");
  }
}, 1000);


function delay(message , time){

    setTimeout(()=>{
        console.log(message);
    },time)
}

delay("pankaj", 3000)

delay("hello oooo", 1000)