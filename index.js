var start = document.querySelector(".start")
var info = document.querySelector(".info")
var startBtn = info.querySelector(".startBtn")
var quit = info.querySelector(".quitBtn")
var quizBox = document.querySelector(".quizBox")
var timer = quizBox.querySelector(".timer .timer-sec")
var results = document.querySelector(".results")


// when start is click
start.addEventListener("click", function start(){
    info.classList.add("activeInfo")
})

// when exit is clicked 
quit.addEventListener("click", function quit(){
    info.classList.remove("activeInfo")
})

// when start quiz is clicked 
startBtn.addEventListener("click", function play(){
    info.classList.remove("activeInfo")
    quizBox.classList.add("activeQuiz")
    // calling questions function
    displayQ(questionCount); 
    // start timer
    setTimer(timeValue)
})


// questions and answer options 
var ask = [
    {
        q: "1. where do you attach the script tags of a JS in HTML page?", 
        a: [
            "after the closing HTML tag", 
            "middle of the HTML page", 
            "head or last line of the body", 
            "no where"
        ], 
        correctA: "head or last line of the body"
    }, 
    {
        q:"2. what do you use JS for", 
        a: [
            "style the website", 
            "add interactive components", 
            "get more traffic to the website", 
            "none of these"
        ], 
        correctA: "add interactive components"
    }, 
    {
        q:"3. what is an array",
        a: [
            "colorful pattern", 
            "a rainbow", 
            "collection of things", 
            "none of these"
        ], 
        correctA: "collection of things", 
    }, 
    {
        q:"4. what can you use a variable for", 
        a: [
            "a random letter", 
            "something that stands out", 
            "way to store information", 
            "none of these"
        ], 
        correctA: "way to store information",  
    },
    {
        q: "5. how do you join two or more variables together", 
        a: [
            "var 1 + var 2", 
            "var 1, var 2", 
            "var 1/var 2", 
            "none of these"
        ], 
        correctA: "var 1 + var 2", 
    }, 
    {
        q: "6. what is the difference between console.log and alert",
        a: [
            "alert is a warning and console.log is a reminder", 
            "console.log is a equation and alert is a pop up", 
            "console.log is recorded in the dev-tools and alert is a pop-up", 
            "none of these"
        ], 
        correctA: "console.log is recorded in the dev-tools and alert is a pop-up",  
    }, 
    {
        q: "7. where are errors coming from the JS file logged on the browser", 
        a: [
            "on the bottom of the page", 
            "on the nav-bar", 
            "in the console", 
            "none of these"
        ], 
        correctA: "in the console",   
    }
    ]
    // set the question count to zero 
     var questionCount = 0
     //set timer 
     var counter;
     //define time value 
     var timeValue = 60
    //  set score 0
    var correctAnswer = 0 

    
    //  when the next button is clicked increment the question count 
    var next = quizBox.querySelector(".startBtn")
    next.addEventListener("click", function(){
        setTimer(timeValue)
         //resarting the timer
         clearInterval(counter)
        
        
        if(questionCount < ask.length -1){
            questionCount++
        displayQ(questionCount)
        
        } else {
            console.log("finished quiz")
            showResults()
        }
        
    })
// function for displaying the questions and answer
function displayQ (index){
 
    var question = document.querySelector(".questions")
    var answers = document.querySelector(".answers")

    for (let i = 0; i < ask.length; i++) {
        question.innerHTML = '<p>' + ask[index].q + '<p>'
        
    }
  
    answers.innerHTML = '<div class="ansList">' + ask[index].a[0] + '<span></span></div>'
                     + '<div class="ansList">' + ask[index].a[1] + '<span></span></div>'
                    + '<div class="ansList">' + ask[index].a[2] + '<span></span></div>'
                    + '<div class="ansList">' + ask[index].a[3] + '<span></span></div>'
//looping through the answer list then deciding which is correct
     var ansList = answers.querySelectorAll(".ansList")
    for (let i = 0; i < ansList.length; i++) {
       ansList[i].setAttribute("onclick", "answerSelected(this)")
        
    }

}
//setting correct answer
 function answerSelected(answer){
     var userAnswer = answer.textContent; 
     var correctAns = ask[questionCount].correctA;
    //  var allAns = answer.children.length 
     if(userAnswer === correctAns){
        console.log("answer is correct")
        correctAnswer ++; 
     }else {
         console.log("wrong answer")
         counter -10; 
        

     }
    }

    //setting timer 
    
    function setTimer (time){
        counter = setInterval(countDown, 1000);
        function countDown (){
            timer.textContent = time
            time--;
            if(time < 0){
                clearInterval(counter)
                timer.textContent = 00
            }
        }

    }

   function showResults(){
    info.classList.remove("activeInfo")
    quizBox.classList.remove("activeQuiz")
    results.classList.add("activeResults")
    
    var name = document.getElementById("name").value;

  document.getElementById("finalScore").innerHTML =
    name + " score is " + correctAnswer;
}
    


 
