
// array for questions otpions ans answer
const questions = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    correctAnswer: "CSS"
  },

  {
    question: "Which JavaScript method is used to select an element by ID?",
    options: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClassName()",
      "innerHTML"
    ],
    correctAnswer: "getElementById()"
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    correctAnswer: "Netscape"
  },

  {
    question: "Which HTML tag is used for creating a hyperlink?",
    options: ["<link>", "<a>", "<p>", "<img>"],
    correctAnswer: "<a>"
  },

  {
    question: "Which CSS property changes text color?",
    options: ["font-size", "background", "color", "border"],
    correctAnswer: "color"
  }
];


// variables required
let currentq = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedOption = null;
let timeLeft = 30;
let timer;


// all required elements 

const currentqEl = document.getElementById("curr-question");

const totalqEl = document.getElementById("total-q");

const questionText = document.getElementById("question-text");

const optionsc =document.getElementById("options-c");

const nextButton =document.getElementById("next-btn");

const timerEl =document.getElementById("time");

const progressBar = document.getElementById("progress");

const quizBox = document.getElementById("quiz-box");

const resultBox = document.getElementById("result-box");

const scoreEl =document.getElementById("score");

const correctEl =document.getElementById("correct-count");

const wrongEl = document.getElementById("wrong-count");

const message =document.getElementById("performance-message");

const restartBtn =document.getElementById("resat-btn");



// set total questions
totalqEl.textContent = questions.length;



// render quuestions on page
function renderQ() {

  reset();

  const currentQuestion =questions[currentq];

  currentqEl.textContent = currentq + 1;

  questionText.textContent =currentQuestion.question;


// show all options of questions

renderoptions( currentQuestion)

 // change progress bar
  changebar();


  // start timer
  startTime();
}

// for render options of questions 
function renderoptions( currentQuestion){

    currentQuestion.options.forEach((option) => {

    const button =document.createElement("button");
    
    button.classList.add("option-btn");

    button.textContent = option;

    button.addEventListener("click", () => {
      selectOption(button, option);
    });

    optionsc.appendChild(button);
  });
}

// for reset all state
function reset() {

  clearInterval(timer);

  timeLeft = 30;

  timerEl.textContent = timeLeft;

  selectedOption = null;

  optionsc.innerHTML = "";
}


// start timer for each questions
function startTime() {

  timer = setInterval(() => {

    timeLeft--;

    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {

      clearInterval(timer);

      wrongAnswers++;

      changeq();
    }

  }, 1000);
}



// for slect options 
function selectOption(button, option) {

  const allOptions =document.querySelectorAll(".option-btn");

  allOptions.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  selectedOption = option;
}



// for check correct answer
function checkAnswer() {

  const currentQuestion =questions[currentq];

  if ( selectedOption === currentQuestion.correctAnswer) {

    score++;
    correctAnswers++;

  } 
  else {

    wrongAnswers++;
  }
}

// fuction for change question

function changeq() {

  clearInterval(timer);

  currentq++;

  if ( currentq < questions.length) 
  {

    renderQ();

  } 
  else {

    showResults();
  }
}


// change progress bar width
function changebar() {

  const value =((currentq) / questions.length) * 100;

  progressBar.style.width =`${value}%`;
}


// main fuction for show result after quize 
function showResults() {

  quizBox.classList.add("hidden");

  resultBox.classList.remove("hidden");

  progressBar.style.width = "100%";

  scoreEl.textContent =`${score} / ${questions.length}`;

  correctEl.textContent = correctAnswers;

  wrongEl.textContent =wrongAnswers;
  resultmessage()
}


// show result message
function resultmessage(){

    if (score >= 4) {

    message.textContent = "Excellent";

  } 

  else if (score >= 2) {

    message.textContent = "Good Job";

  } 
  
  else {

    message.textContent ="Needs Improvement";
  }

}


// event for reset quize
restartBtn.addEventListener("click", () => {

  currentq = 0;

  score = 0;

  correctAnswers = 0;

  wrongAnswers = 0;

  selectedOption = null;

  resultBox.classList.add("hidden");

  quizBox.classList.remove("hidden");

  renderQ()
  progressBar.style.width ="0%";
  
});

// next button event for next questions
nextButton.addEventListener("click", () => {

  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }

  checkAnswer();

  changeq();
});



// initial render of quize
renderQ();
