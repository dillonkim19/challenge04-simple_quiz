var qs = function (tag) {
    return document.querySelector(tag);
}

var quiz = document.getElementById("quiz");

var questions = [
    {
        title: 'Question 1: ;alskdjf',
        answers: [
            {
                answer: 1,
                correct: false
            },
            {
                answer: 100,
                correct: false
            },
            {
                answer: 123,
                correct: true
            }
            
        ]
    },
    {
        title: 'Question 2: ;alskdjf',
        answers: [
            {
                answer: 234,
                correct: false
            },
            {
                answer: 432,
                correct: false
            },
            {
                answer: 123,
                correct: true
            }
            
        ]
    },
    {
        title: 'Question 3: ;alskdjf',
        answers: [
            {
                answer: 234,
                correct: false
            },
            {
                answer: 432,
                correct: false
            },
            {
                answer: 123,
                correct: true
            }
            
        ]
    }
]

var currentQ = 0;
var timeLeft = 0;
var timerEl = qs("#timeLeft");

var startTimer = function() {
    interval = setInterval(function (){
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        

        if (timeLeft === 0){
            gameOver();
        }
        
    }, 1000)
}


function homepage(){
    // var quizTitle = document.createElement('p');
    // quizTitle.textContent = 'My Quiz'
    // quiz.appendChild(quiztitle);

    quiz.innerHTML = /* html */ `
        <p>
            My Quiz
        </p>
        <button id="startQuiz">Start Quiz</button>
    `
    document
    .getElementById('startQuiz')
    .addEventListener(
        'click', 
        function () {
            //set Time Left to 10 Seconds and start timer
            timeLeft = 10;
            timerEl.textContent = "Time: " + 10;
            startTimer();
            // change page to questions
            questionPage(questions[currentQ])
        }
    )
}

function questionPage(question){
    quiz.innerHTML = /* html */ `
        <p>
            ${question.title}
        </p>
        <ul>
            <li><button id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button></li>
            <li><button id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button></li>
            <li><button id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button></li>
        </ul>
    `

    document
    .getElementById('answerOne')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
            }
            currentQ++

            if (questions.length === currentQ){
                gameWonScreen();
            }

            questionPage(questions[currentQ])
        }
    )

    document
    .getElementById('answerTwo')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
            }
            
            currentQ++

            if (questions.length === currentQ){
                gameWonScreen();
            }

            questionPage(questions[currentQ])
        }
    )

    document
    .getElementById('answerThree')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
            }
            currentQ++

            if (questions.length === currentQ){
                gameWonScreen();
            }

            questionPage(questions[currentQ])
        }
    )
}

function gameWonScreen(){
    quiz.innerHTML = /* html */ `
        <h1>NICE WORK</h1>   
    `
}

function gameOver(){
    quiz.innerHTML = /* html */ `
        <h1>GAME OVER</h1>
    `
    clearInterval(interval);

}

homepage();