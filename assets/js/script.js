var quiz = document.getElementById("quiz");
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
        'click', function () {
            questionPage()
        }
    )
}

function questionPage(){
    quiz.innerHTML = /* html */ `
    <p>
        Question 1
    </p>
    <ul>
        <li><button>Option 1</button></li>
    </ul>
    <button>Start Quiz</button>
`
}

homepage();