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
                //take time off
            }
            currentQ++
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
                gameDoneScreen();
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
            questionPage(questions[currentQ])
        }
    )
}

function gameDoneScreen(){
    quiz.innerHTML = /* html */ `
        <h1>NICE WORK</h1>   
    `
}

homepage();