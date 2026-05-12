
let btn = document.getElementById("clickBtn");

btn.onclick = function() {
    console.log("Button clicked");
};


btn.addEventListener("click", () => {
    console.log("Clicked using addEventListener");
});



btn.addEventListener("dblclick", () => {
    console.log("Double Click");
});


let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
    box.style.background = "blue";
});

box.addEventListener("mouseout", () => {
    box.style.background = "gray";
});



box.addEventListener("mousedown", () => {
    console.log("Mouse Down");
});

box.addEventListener("mouseup", () => {
    console.log("Mouse Up");
});


document.addEventListener("keydown", (e) => {
    console.log("Key down:", e.key);
});

document.addEventListener("keyup", (e) => {
    console.log("Key up:", e.key);
});



let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
});


input.addEventListener("focus", () => {
    input.style.border = "2px solid blue";
});

input.addEventListener("blur", () => {
    input.style.border = "1px solid gray";
});


window.addEventListener("load", () => {
    console.log("Page loaded");
});


window.addEventListener("scroll", () => {
    console.log(window.scrollY);
});