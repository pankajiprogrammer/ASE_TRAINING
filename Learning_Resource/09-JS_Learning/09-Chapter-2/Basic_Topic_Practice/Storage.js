// LOCAL STORAGE 5MB


// set name
localStorage.setItem("name","Pankaj saratkar")

//get name

let username = localStorage.getItem("name")

// remove

localStorage.removeItem("name");

// clear storage

localStorage.clear()

let user = {
    "name":"pankaj",
    "age":22,
    "mobile":6261645568,
    "city":"pune"
}

localStorage.setItem("user_1",JSON.stringify(user));

let get_user_1 = JSON.parse(localStorage.getItem("user_1"))



let arr = [1, 2, 3];

localStorage.setItem("numbers", JSON.stringify(arr));

let arr_1 = JSON.parse(localStorage.getItem("numbers")) || [];

arr_1.push(4);

localStorage.setItem("numbers", JSON.stringify(arr_1));


// SESSION STORAGE 5MB


sessionStorage.setItem("sessionUser", "Pankaj");

let user_2 = sessionStorage.getItem("sessionUser");


let data = { page: "home" };

sessionStorage.setItem("pageData", JSON.stringify(data));


let data_1 = JSON.parse(sessionStorage.getItem("pageData"));


sessionStorage.removeItem("sessionUser");


//COOKIES 4KB


document.cookie = "username=Pankaj";


document.cookie = "user=Pankaj; expires=Fri, 31 Dec 2026 12:00:00 UTC";


console.log(document.cookie);
