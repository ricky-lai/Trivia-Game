var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var counter = 30;
var timerCountdown = document.getElementById("countdown");
var displayResults = document.getElementById("quiz__results");
var displayQuestions = document.getElementById("quiz__questions");

displayResults.style.display = "none";

function showResults() {
  displayQuestions.style.display = "none";
  displayResults.style.display  = "block";
}

// Set Timer
var timer = setTimeout(function() {
  showResults();
}, counter * 1000);

// Set Countdown
var countdown = setInterval(function() {
  counter--;
  timerCountdown.innerHTML = counter;
  if (counter === 0) {
    stopCountdown();   
    showResults(); 
  }
}, 1000);

function stopCountdown() {
  clearInterval(countdown);
}

var questions = [
  {
    question: "What is Walter White's alias?",
    answers: [
      "Dr. Doolittle",
      "Stay Puft Marshmallow Man",
      "Heisenberg",
      "Caitlyn Jenner"
    ]
  },
  {
    question: "What was the name of the product that Walter and Jesse were producing and selling?",
    answers: [
      "Dreamsicle",
      "Blue Sky",
      "Bomb Pop",
      "Half Baked"
    ]
  },
  {
    question: "What did Walter do as a day job?",
    answers: [
      "Flip Signs",
      "Professional Yo-Yo'er",
      "Shoe Salesman",
      "Chemistry Teacher"
    ]
  },
  {
      question: "Why did Walter end up buying a car wash?",
      answers: [
        "So he would always have a clean car",
        "He loves the smell of a fresh car wash",
        "To launder millions of U.S dollars",
        "To have a home away from home",
      ]
  },
  {
      question: "What is Jesse's last name?",
      answers: [
          "Sparrow",
          "Potter",
          "Blackbeard",
          "Pinkman"
      ]
  },
  {
      question: "Who was Walter's lawyer?",
      answers: [
          "Saul Goodman",
          "The Rock",
          "Donald Trump",
          "Ali Baba"
      ]
  }
];

var correctAnsArr = [
  "Heisenberg",
  "Blue Sky",
  "Chemistry Teacher",
  "To launder millions of U.S dollars",
  "Pinkman",
  "Saul Goodman"
];

// Display question and answers
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];

  var sec = document.createElement("section");
  sec.className = "quiz__questions--question q" + i;
  sec.innerHTML = `<p>${question.question}</p>`;
  document.getElementById("form").appendChild(sec);

  for (var j = 0; j < question.answers.length; j++) {
    // console.log(question.answers[j]);
    var answer = question.answers[j];

    var div = document.createElement("div");
    var radioBtn = `<input type="radio" name="group${i}" value="${answer}">`
    div.innerHTML = radioBtn + " " + answer;
    // div.setAttribute("id", "answer");
    document.querySelector(".q" + i).appendChild(div);
  }
}

var form = document.forms["form"];
form.addEventListener("submit", function(event) {
  event.preventDefault();
  stopCountdown();

  for (var i = 0; i < form.children.length; i++) {
    var found = "";

    for (var j = 0; j < form["group" + i].length; j++) {
      if (form["group" + i][j].checked) {
        found = form["group" + i][j].value;
      }
    }

    if (found === correctAnsArr[i]) {
      correctAns += 1;
      found = "";
    } else if (found === "") {
      unanswered += 1;
    } else {
      incorrectAns += 1;      
    }
  }

  document.getElementById("correct").innerHTML = correctAns;
  document.getElementById("incorrect").innerHTML = incorrectAns;
  document.getElementById("unanswered").innerHTML = unanswered;

  showResults();
});