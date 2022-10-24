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
            <li><button id="answerOne">${question.answers[0].answer}</button></li>
            <li><button id="answerTwo">${question.answers[1].answer}</button></li>
            <li><button id="answerThree">${question.answers[2].answer}</button></li>
        </ul>
    `

    document
    .getElementById('answerOne')
    .addEventListener(
        'click', 
        function () {
            currentQ++
            questionPage(questions[currentQ])
        }
    )

}

homepage();