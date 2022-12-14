// function for query selector 
var qs = function (tag) {
    return document.querySelector(tag);
}

// array of questions
var questions = [
    {
        title: 'Question 1: What does JS stand for?',
        answers: [
            {
                answer: "Just Sing",
                correct: false
            },
            {
                answer: "Jumbo Shrimp",
                correct: false
            },
            {
                answer: "JavaScript",
                correct: true
            }
            
        ]
    },
    {
        title: 'Question 2: What does CSS Stand for?',
        answers: [
            {
                answer: "IDK",
                correct: false
            },
            {
                answer: "Cascading Style Sheets",
                correct: true
            },
            {
                answer: "Cool Summer Shirts",
                correct: false
            }
            
        ]
    },
    {
        title: 'Question 3: What is the latest HTML version?',
        answers: [
            {
                answer: 4,
                correct: false
            },
            {
                answer: 3,
                correct: false
            },
            {
                answer: 5,
                correct: true
            }
            
        ]
    }
]

//variables for use
var quiz = document.getElementById("quiz");
var currentQ = 0;
var timeLeft = 0;
var timerEl = qs("#timeLeft");


//start timer for quiz
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


//when high scores button is clicked
document
.getElementById('highScores')
.addEventListener(
    'click', 
    function () {

    quiz.innerHTML = /* html */ `
        <h2>High Scores</h2>
        <ul id="scoreList">
        
        </ul>
        <button id="resetScores">Reset Scores</button>
        <button id="homePage">Home</button>
    `


    // create the list elements of high scores
    var scoresArray = JSON.parse(localStorage.getItem("scoresObj"))
    var scoreListEl = qs("#scoreList");

    if (scoresArray === null){

    } else {
        for (var i = 0; i < scoresArray.length; i++) {
            var listitem = document.createElement("li");
            
            var scoreHTML = "Initial: " + scoresArray[i].initial + ", " + scoresArray[i].time
            listitem.innerHTML = scoreHTML;
            scoreListEl.appendChild(listitem)
            
        }
    }

    var scoresEl = document.getElementById("highScores")
    var homeButton = document.querySelector("#homePage")
    var resetButton = document.querySelector("#resetScores")

    // when reset button is clicked, high scores are deleted
    resetButton.addEventListener("click", function(){
        localStorage.setItem("scoresObj", null);
    })

    homeButton.addEventListener("click", function(event) {
        event.preventDefault();

        homepage();
    
        
    });
    }
)

// homepage
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

// questions pages
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
    // when 1st option is clicked
    document
    .getElementById('answerOne')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
                gameOver();
            }
            currentQ++

            if (questions.length === currentQ){
                gameWonScreen();
            } else {
                questionPage(questions[currentQ])
            }

            
        }
    )

    // when 2nd option is clicked
    document
    .getElementById('answerTwo')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
                gameOver();
            }
            
            currentQ++

            if (questions.length === currentQ){
                gameWonScreen();
            } else {
                questionPage(questions[currentQ])
            }

            
        }
    )

    // when 3rd option is clicked
    document
    .getElementById('answerThree')
    .addEventListener(
        'click', 
        function (event) {
            if (event.currentTarget.dataset.correct === 'true'){
                alert('Good Job!');
            } else {
                alert('WRONG!');
                gameOver();
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


// game won page
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

    // when submit button is clicked, initial and time is stored in localstorage
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
    
        var initials = document.querySelector("#initials").value;
    
        if (initials === "") {
            alert("error", "Initials cannot be blank");
          } else {
            alert("success", "Registered successfully");
        }


        
        var scoresArray = JSON.parse(localStorage.getItem("scoresObj"))


        //if no scores are stored, make it, else add/push new scores
        if (scoresArray === null) {
            scoresArray = [{initial: initials, "time":timeLeft}]
            console.log(scoresArray);
        } else {
            scoresArray.push({initial: initials, "time":timeLeft})
            console.log(scoresArray);
        }
        
        localStorage.setItem("scoresObj", JSON.stringify(scoresArray));
        
    });
    
    // when play again button is clicked
    playAgainButton.addEventListener("click", function(event) {
        event.preventDefault();

        homepage();
    
        
    });
}




//when time is over 
function gameOver(){
    
    clearInterval(interval);

    quiz.innerHTML = /* html */ `
        <h1>GAME OVER</h1>
        <button id="playAgain">Play Again</button>
    `

    var playAgainButton = document.querySelector("#playAgain");

    playAgainButton.addEventListener("click", function(event) {
        event.preventDefault();

        homepage();
    
        
    });
    

}

homepage();