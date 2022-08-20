const quizData = [
    {
        question: "What is the correct syntax for the Print command?",
        a: "print message",
        b: "print(message)",
        c: "print(\"message\")",
        d: "print(\'message\")",
        correct: "c",
    },
    {
        question: "What is the output to this command?",
        a: "25",
        b: "52",
        c: "x+y",
        d: "7",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What would this command print? print('6'*9)",
        a: "54",
        b: "666666666",
        c: "6*9",
        d: "6",
        correct: "b",
    },
    {
        question: "Something with this input command is wrong. What is the valid syntax? name = input (What is your name?\" ",
        a: "name = input('What is your name? \")",
        b: "name = input What is your name?",
        c: "name = input(What is your name? )",
        d: "name = input(\"What is your name?\" )",
        correct: "d",
    },
    {
        question: "What is the correct file extension for Python?",
        a: "/*This is a comment*/",
        b: "//This is a comment",
        c: "#This is a comment",
        d: "&This is a comment",
        correct: "c",
    },
    {
        question: "How do you write a comment in Python?",
        a: ".pyt",
        b: ".pt",
        c: ".pyth",
        d: ".py",
        correct: "d",
    },
    {
        question: "How do you create a variable with the numeric value 5?",
        a: "x = \"5\"",
        b: "x = 5",
        c: "x = int(5)",
        d: "x = '5'",
        correct: "b",
    },
    {
        question: "Which operator is used to compare 2 values? i.e. x ??? 2",
        a: "><",
        b: "<>",
        c: "==",
        d: "=",
        correct: "c",
    },
    {
        question: "What is the correct syntax for an If statement?",
        a: "If x > y =",
        b: "if x > y:",
        c: "if (x > y)",
        d: "if x > y then:",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
