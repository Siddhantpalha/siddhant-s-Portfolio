const questions = [
    {
        question: "which is largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Austrālia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ] 
    },
    {
        question: "who is called mahesh dalle in your group?",
        answers: [
            { text: "abhi", correct: false},
            { text: "adarsh", correct: true},
            { text: "samarth", correct: false},
            { text: "siddhant", correct: false},
        ]
    },
    {
        question: "best character in money heist?",
        answers: [
            { text: "professor", correct: false},
            { text: "berlin", correct: true},
            { text: "rio", correct: false},
            { text: "helsinky", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
       answerButtons.appendChild(button);
    });
}

startQuiz();