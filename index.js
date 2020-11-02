var start = document.querySelector(".start")
var info = document.querySelector(".info")
var startBtn = info.querySelector(".startBtn")
var quit = info.querySelector(".quitBtn")
var quizBox = document.querySelector(".quizBox")

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
    displayQ(0); 
})


// questions and answer options 
var ask = [
    {
        q: "1. where do you attach the script tags of a JS in HTML page?", 
        a: ["after the of the closing HTML tag", "middle of the HTML page", "head or last line of the body", "no where"]
    }, 
    {
        q:"2. what do you use JS for", 
        a: ["style the website", "add interactive components", "get more traffic to the website", "none of these"]
    }, 
    {
        q:"3. what is an array",
        a: ["colorful pattern", "a rainbow", "collection of things", "none of these"]
    }, 
    {
        q:"4. what can you use a variable for", 
        a: ["a random letter", "something that stands out", "way to store information", "none of these"]
    },
    {
        q: "5. how do you join two or more variables together", 
        a: ["var 1 + var 2", "var 1, var 2", "var 1/var 2", "none of these"]
    }, 
    {
        q: "6. what is the difference between console.log and alert",
        a: ["alert is a warning and console.log is a reminder", "console.log is a equation and alert is a pop up", "console.log is recorded in the dev-tools and alert is a pop-up", "none of these"]
    }, 
    {
        q: "7. where are errors coming from the JS file logged on the browser", 
        a: ["on the bottom of the page", "on the nav-bar", "in the console", "none of these"]
    }
    ]
    // set the question count to zero 
     var questionCount = 0
    //  when the next button is clicked increment the question count 
    var next = quizBox.querySelector(".startBtn")
    next.addEventListener("click", function(){
        questionCount++
        displayQ(questionCount)
    })
// function for displaying the questions 
function displayQ (index){
 
    var question = document.querySelector(".questions")
    var answers = document.querySelector(".answers")
    
    question.innerHTML = '<p>' + ask[index].q + '<p>'
    answers.innerHTML = '<div>' + ask[index].a[0] + '<div>'
                     + '<div>' + ask[index].a[1] + '<div>'
                    + '<div>' + ask[index].a[2] + '<div>'
                    + '<div>' + ask[index].a[3] + '<div>'


}
   
    // answers.innerHTML = 

 
