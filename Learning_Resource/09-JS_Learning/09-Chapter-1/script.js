// by id
let title = document.getElementById("title");

// querySelector
let input = document.querySelector("#inputBox");

// querySelectorAll
let items = document.querySelectorAll("li");

title.innerText = "Updated DOM Practice";
title.innerHTML = "<i>DOM Updated</i>";

title.style.color = "blue";
title.style.backgroundColor = "yellow";

let li = document.createElement("li");
li.innerText = "New Item";

let list = document.getElementById("list");

list.appendChild(li);

li.remove(); // remove element


let parent = list.parentElement;
let children = list.children;
let first = list.firstElementChild;
let next = title.nextElementSibling;