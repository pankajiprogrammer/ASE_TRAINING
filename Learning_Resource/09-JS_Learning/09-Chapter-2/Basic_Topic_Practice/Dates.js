// current date and time

let now = new Date();

console.log(now); // current date-time

// year, month , day

let C_Date = new Date(2026, 0, 15); 

console.log(C_Date);

// string format

let dateStr = new Date("2026-05-10");

console.log(dateStr);


// extract parts of date

let d = new Date();

console.log(d.getFullYear()); // y
console.log(d.getMonth());    // m
console.log(d.getDate());     // d
console.log(d.getDay());      // w
console.log(d.getHours());    // h
console.log(d.getMinutes());  // m
console.log(d.getSeconds());  // s


// modify date

let dd = new Date();

dd.setFullYear(2030);
dd.setMonth(11); // December
dd.setDate(25);

console.log(d);


// timestamp

let time = new Date().getTime();

console.log(time); 


let ddd = new Date();

console.log(ddd.toDateString()); // readable date
console.log(ddd.toTimeString()); // readable time


// current date-time

const noww = Temporal.Now.plainDateTimeISO();

console.log(noww);

let t = Temporal.Now.plainDateISO();

let f = t.add({ days: 10 });

console.log(f);


let date = Temporal.PlainDate.from("2026-5-10");

console.log(date.year);  // 2026
console.log(date.month); // 5
console.log(date.day);   // 10


let tt= Temporal.PlainTime.from("14:30:00");

console.log(tt.hour);
console.log(time.minute);


let dt = Temporal.PlainDateTime.from("2024-05-10T14:30");

console.log(dt);