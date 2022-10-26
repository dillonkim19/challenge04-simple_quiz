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

// function syncLocalStorage(timeLeft) {
//     localStorage.setItem("points", points)
//     localStorage.setItem("timeLeft", timeLeft)
//     localStorage.setItem("initials", initials)
// }



function homepage(){
    // var quizTitle = document.createElement('p');
    // quizTitle.textContent = 'My Quiz'
    // quiz.appendChild(quiztitle);

    currentQ = 0;

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
            } else {
                questionPage(questions[currentQ])
            }

            
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
            } else {
                questionPage(questions[currentQ])
            }

            
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
            } else {
                questionPage(questions[currentQ])
            }

            
        }
    )
}



function gameWonScreen(){
    
    var timeLeft = timerEl.textContent;
    clearInterval(interval);

    quiz.innerHTML = /* html */ `
        <h1>NICE WORK</h1> 
        <h2>Input Initials to Save Score!</h2>
        <label for="">Initials</label>
        <input type="text" name="initials" id="initials" placeholder="DK" />  
        <button id="submit">Submit</button>
        <button id="playAgain">Play Again</button>
    `

    var submitButton = document.querySelector("#submit");
    var playAgainButton = document.querySelector("#playAgain");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
    
        var initials = document.querySelector("#initials").value;
    
        if (initials === "") {
            alert("error", "Initials cannot be blank");
          } else {
            alert("success", "Registered successfully");
        }


        
        var scoresArray = JSON.parse(localStorage.getItem("scoresObj"))



        if (scoresArray === null) {
            scoresArray = [{initial: initials, "time":timeLeft}]
            console.log(scoresArray);
        } else {
            scoresArray.push({initial: initials, "time":timeLeft})
            console.log(scoresArray);
        }
        
        localStorage.setItem("scoresObj", JSON.stringify(scoresArray));
        
    });

    playAgainButton.addEventListener("click", function(event) {
        event.preventDefault();

        homepage();
    
        
    });
}





function gameOver(){
    
    clearInterval(interval);

    quiz.innerHTML = /* html */ `
        <h1>GAME OVER</h1>
    `
    

}

homepage();