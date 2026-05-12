 
// 5. Longest Word in Sentence

// Problem Statement
// Write a function that finds the longest word in a sentence.

// Input

const sentence = "JavaScript is powerful for backend and frontend development";


// Expected Output
// development

const result = sentence.replace(/\s+/g, ' ').trim();

const word = result.split(" ")

console.log(word);

let len = -Infinity
let answer = ""

word.forEach((w) =>{

    if(w.length > len){
        len = w.length;
        answer = w;
    }

})


console.log(`The longest word in a sentence is ${answer}`);