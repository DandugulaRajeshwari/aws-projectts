const quizQuestions = [

  {

    question: "Will the following JavaScript code work?(var js = (function(x) {return x*x;}(10));)",

    options: [" Exception will be thrown","Memory leak","Error","Yes, perfectly"],

    correctAnswer: "Yes, perfectly"

  },

  {

    question: "What will be the output of the following code snippet?(print(typeof(NaN));)",

    options: ["Object", "Number", "Color", "None of the above"],

    correctAnswer: "Number"

  },

  {
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",

    options: ["Boolean", "Undefined", "Object", "Integer"],

    correctAnswer: "Object"

  },

  {

     question: "Which function is used to serialize an object into a JSON string in Javascript?",

     options: ["stringify()", "parse()", "convert()", "None of the above"],

    correctAnswer: "stringify()"

  },

  {

     question: "Which of the following are closures in Javascript?",

     options: ["Variables", "Functions", "Objects", "All of the above"],

     correctAnswer: "All of the above"

  },

  {

    question:"Which of the following are not server-side Javascript objects?",

    options:["Data","FileUpload","Funtion","All of the Above"],

    correctAnswer:"All of the Above"

  },

  {

      question:"Which of the following is not a Javascript framework?",

      options:["Node","Vue","React","Cassandra"],

      correctAnswer:"Cassandra"

    },

  {

    questio:"Which of the following keywords is used to define a variable in Javascript?",

      options:["var","let","Both A & B","None of the above"],

      correctAnswer:"Both A & B"

    },

  {

    question:"Which of the following methods can be used to display data in some form using Javascript?",

    options:["document.write()","console.log()","window.alert()","All of the above"],

       correctAnswer:"All of the above"

     },

  {

     question:"How can a datatype be declared to be a constant type?",

    options:["const","var","let","constant"],

       correctAnswer:"const"

    },

  {

    question:"How do we write a comment in javascript?",

    options:["/* */","//","#","$ $"],

    correctAnswer:"//"

    },

  {

    question:"How to stop an interval timer in Javascript?",

    options:["clearInterval","clearTimer","intervalOver","None of the above"],

    correctAnswer:"clearInterval"

    },

  {

    question:"Javascript is an _______ language?",

    options:["Oject-Oriented","Object-Based","Procedural","None of the above"],

    correctAnswer:"Oject-Oriented"

    },

  {

    question:"The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",

    options:["Object Serialization","Object encapsulation","Object Inheritance","None of the Above"],

    correctAnswer:"Object Serialization"

    },

  {

    question:"Upon encountering empty statements, what does the Javascript Interpreter do?",

    options:["Throws an Error","Ignores the statement","Gives a Warning","None of the Above"],

    correctAnswer:"Ignores the statement"

    },

    {

        question:"What is the output of the following code snippet?(print(NaN === NaN);)",

        options:["true","false","Undefined","Eror"],

        correctAnswer:"false"

      },

    {

      question:"What keyword is used to check whether a given property is valid or not?",

        options:["in","is in","exists","lies"],

        correctAnswer:"in"

    },

    {

    question:"What keyword is used to declare an asynchronous function in Javascript?",

    options:["async","await","setTimeOut","None of the Above"],

         correctAnswer:"async"

      },

    {

    question:"Which one of the following also known as Conditional Expression:",

    options:["Alternative to if-else","Switch statement","If-then-else statement","immediate if"],

         correctAnswer:"immediate if"

      },

    {

    question:"When interpreter encounters an empty statements, what it will do:",

    options:["Shows a warning","Throws an error","Ignores the statements","None of the above"],

    correctAnswer:"Ignores the statements"

    },

    {

    question:"The 'function' and 'var' are known as:",

    options:["Keywords","Data types","Declaration statements","Prototypes"],

    correctAnswer:"Declaration statements"

    },

    {

    question:"Which of the following variables takes precedence over the others if the names are the same?",

    options:["Global variable","The local element","The two of the above","None of the above"],

    correctAnswer:"The local element"

    },

    {

    question:"Which one of the following is the correct way for calling the JavaScript code?",

    options:["Preprocessor","Triggering Event","RMI","Function/Method"],

      correctAnswer:"Function/Method"

    },

    {

    question:"Which of the following type of a variable is volatile?",

    options:["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],

      correctAnswer:"Mutable variable"

      },

      {

          question:"Which of the following option is used as hexadecimal literal beginning?",

          options:["00","0x","0X","Both 0x and 0X"],

          correctAnswer:"Both 0x and 0X"

        },

      {

        question:"In the JavaScript, which one of the following is not considered as an error:",

          options:["Syntax error","Missing of semicolons","Division by zero","Missing of Bracket"],

          correctAnswer:"Division by zero"

      },

      {

      question:"Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",

      options:["toExponential()","toFixed()","toPrecision()","toLocaleString()"],

           correctAnswer:"toFixed()"

        },

      {

      question:"Which of the following number object function returns the value of the number?",

      options:["toString()","valueOf()","toLocaleString()","toPrecision()"],

           correctAnswer:"valueOf()"

        },

      {

      question:"Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",

      options:["slice()","split()","substr()","All of the above"],

      correctAnswer:"substr()"

      },

      {

      question:"Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",

      options:["if(a!==null)","if (a!)","if(a!null)","if(a!=null)"],

      correctAnswer:"if(a!==null)"

      },

      {

      question:"In JavaScript, what will be used for calling the function definition expression:",

      options:["Function prototype","Function literal","Function calling","Function declaration"],

      correctAnswer:"Function literal"

      },

      {

      question:"Which one of the following is used for the calling a function or a method in the JavaScript:",

      options:["Property Access Expression","Functional expression","Invocation expression","None of the above"],

        correctAnswer:"Invocation expression"

      },

      {

      question:"Which one of the following operator is used to check weather a specific property exists or not:",

      options:["Exists","exist","within","in"],

        correctAnswer:"in"

        },

        {

            question:"Which one of the following is an ternary operator:",

            options:["?",":","-","None of the above"],

            correctAnswer:"?"

          },

        {

          question:"'An expression that can legally appear on the left side of an assignment expression.' is a well known explanation for variables, properties of objects, and elements of arrays. They are called_____.",

            options:["Properties","Prototypes","Definition","Lvalue"],

            correctAnswer:"Lvalue"

        },

        {

        question:"What we will get if we compare the 'one' with '8' using the less than operator ('one'<8)?",

        options:["False","True","NaN","Undefined"],

             correctAnswer:"False"

          },

        {

        question:"Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",

        options:["=","===","==","&&"],

             correctAnswer:"=="

          },

        {

        question:"Which one of the following operator returns false if both values are equal?",

        options:["!","!==","!=","All of the above"],

        correctAnswer:"!="

        },

        {

        question:"In a case, where the value of the operator is NULL , the typeof returned by the unary operator is___.",

        options:["undefined","string","boolean","object"],

        correctAnswer:"object"

        },

        {

        question:"Which one of the following is not a keyword:",

        options:["if","with","debugger","use strict"],

        correctAnswer:"use strict"

        },

        {

        question:" Which one of the following symbol is used for creating comments in the javascript:",

        options:["-","//","\\","*"],

          correctAnswer:"//"

  },

 {

    question:"Which one of the following is not considered as 'statement' in the JavaScript?",

    options:["use strict","debugger","if","with"],

    correctAnswer:"use strict"

  },

  {

  question:"A set of unordered properties that, has a name and value is called______",

  options:["String","Array","Serialized Object","Object"],

  correctAnswer:"Object"

   },

   {

   question:"A collection of elements of the same data type which may either in order or not, is called _____.",

   options:["String","Array","Serialized Object","Object"],

   correctAnswer:"Array"

    },

    {

    question:"The linkage of a set of prototype objects is known as______",

    options:["prototype stack","prototype","prototype class","prototype chain"],

    correctAnswer:"prototype chain"

     },



 {

    question:"Which one of the following method or operator is used for identification of the array?",

    options: ["Typeof", "==", "===", "isarrayType()"],

    correctAnswer: "isarrayType()"

  },

  {

    question: "If a function which does not return a value is known as _____",

    options: ["Static function", "Procedures", "Method", "Dynamic function"],

    correctAnswer: "Procedures"

  },

  {

     question:"The execution of a function stops when the program control encounters the _________ statement in the body of the function.",

     options: ["return statement", "continue statement", "break statement", "goto statement"],

     correctAnswer: "return statement"

  },

  {

    question:"Which one of the following is used for the calling a function or a method in the JavaScript:",

    options: ["Property Access Expression", "Functional expression", "Invocation expression", "Primary expression"],

    correctAnswer: "Invocation expression"

   },

   {

     question:"The 'new Point(3,2)', is a kind of _______ expression",

     options: ["Object Creation Expression", "Primary Expression", "Invocation Expression", "None of the mentioned"],

     correctAnswer: "Object Creation Expression"

   },

   {

      question: "To know about an object, whether the object is a prototype (or a part of a prototype chain) of another object, the user can use_______",

      options: ["==operator", "equals() method", "=== operator", "isPrototypeOf() method"],

      correctAnswer: "isPrototypeOf() method"

   },

   {

    question: "In the following given line of code, the prototype representing the_____(functionx(){};  )",

    options: ["Function x", "Prototype of a function", "A custom constructor", "Not valid"],

    correctAnswer: "Prototype of a function"

   },

   {

    question: "Both the 'rduucedRight()' and 'reduce()' methods follow which one of the following common operation?",

    options: ["inject and fold", "filter and fold", "finger and fold", "fold"],

    correctAnswer: "inject and fold"

   },

   {

    question: "If a function which does not return a value is known as _____",

    options: [ "Static function", "Procedures","Method", "Dynamic function"],

    correctAnswer: "Procedures"

   },

   {

    question: "The execution of a function stops when the program control encounters the _________ statement in the body of the function.",

    options: ["return statement","continue statement","break statement","goto statement"],

    correctAnswer: "return statement"

   },

   {

     question: "Which one of the following code is equivalent to call a function 'x' of the class 'a' which have two arguments g and h?",

     options: ["a,x(g,h);","x(g) &&a.x(g);","x(a,g);","(g,h);"],

     correctAnswer: "a,x(g,h);"

    },

   {

     question: "Which one of the following code is equivalent to the following given code?( a.x(g,h);  )",

     options: ["x (g) &&a.x (h);","a [ 'x' ] ( g , h );","a (x )[ 'g' , 'h' ];","x( g&&h );"],

     correctAnswer: "text-align"

    },

    {

      question: "Which one of the following keywords is used for defining the function in the JavaScript?",
      options: ["Void","init","main","function"],

      correctAnswer: "function"

    },

    {

      question: "What output will come if we run the following part of the JavaScript code? (var string2Num=parseInt('123abc');  ",

      options: ["Exception","123abc","123","NaN"],

      correctAnswer: "123"

    },

    {

      question: "Which one of the following is not a example of closures?",

      options: ["Graphs","Variables","Functions","Objects"],

      correctAnswer: "Graphs"

    },	
    {

      question: " In JavaScript, what kind of scoping is used?",

      options: ["Literal scoping","Sequential scoping","Segmental scoping","Lexical scoping"],

      correctAnswer: "Lexical scoping"

    },	
    {

      question: "In JavaScript, what kind of scoping is used?",

      options: ["Literal scoping","Sequential scoping","Segmental scoping","Lexical scoping"],

      correctAnswer: "Lexical scoping"

    },	
    {

      question: "Which one of the following can be considered as the opposite approach of the Lexical Scoping?",

      options: ["Dynamic scoping","Literal scoping","Static scoping","Generic scoping"],

      correctAnswer: "Dynamic scoping"

    },	
    {

      question: "Which one of the following algorithmic languages is not the lexical scoping standardized in?",

      options: ["Html","Ada","Pascal","Modula2"],

      correctAnswer: "Html"

    },	
    {

      question: "Which of the following POSIX signals generate events?",

      options: ["SIGINT","SIGDOWN","SIGFLOAT","SIGSHORT"],

      correctAnswer: "SIGINT"

    },	
    {

      question: "Which HTML element is used to put the JavaScript code?",

      options: ["<javascript>","<js>","<scripting>","<script>"],

      correctAnswer: "<script>"

    },	
    {

      question: "Which of the following is the correct syntax to print a page using JavaScript?",

      options: ["print();","print();","print();","print();"],

      correctAnswer: "print();"

    },	
    {

      question: "Which of the following is not a JavaScript Data Types?",

      options: ["Boolean","Undefined","Number","Float"],

      correctAnswer: "Float"

    },	
    {

      question: "Which of the following function of the Array object is used to add one or more elements to the front of an array and returns the new length of the array?",

      options: ["splice()","unshift()","sort()","toString()"],

      correctAnswer: "unshift()"

    },	
    {

      question: "Which of the following is not a JavaScript framework or library?",

      options: ["Polymer","Meteor","jQuery","Cassandra"],

      correctAnswer: "Cassandra"

    },	
    {

      question: "Which of the following is the correct statement of WHILE loop start?",

      options: ["while (i <= 10)","while (i <= 10; i++)","while i = 1 to 10","None of These"],

      correctAnswer: "while (i <= 10)"

    },	
    {

      question: "What was the original name of JavaScript when it discovered?",

      options: ["LiveScript","EScript","JScript","Mocha"],

      correctAnswer: "Mocha"

    },	
    {

      question: "Which of the following JavaScript operator is used to assign a value to a variable based on some condition?",

      options: ["Assignment operator","Bitwise Operator","Conditional operator","Logical Operator"],

      correctAnswer: "Conditional operator"

    },	
    {

      question: " What are the different types of Pop up boxes available in JavaScript?",

      options: ["Alert","Prompt","Confirm","All of the above"],

      correctAnswer: "Prompt"

    },	
    {

      question: "Which of the following is a server-side JavaScript object?",

      options: ["Date","FileUpload","File","Function"],

      correctAnswer: "File"

    },	
    {

      question: "What are the different types of errors in JavaScript?",

      options: ["Load time errors","Run time errors","Logical Errors","All of the above"],

      correctAnswer: "Run time errors"

    },	
    {

      question: "Which of the following built-in method is used to remove the last element from an array and return that element??",

      options: ["last()","pop()","get()","None of the above."],

      correctAnswer: "pop()"

    },	
 

];



// Variables to track quiz state

let currentQuestionIndex = 0;

let score = 0;

let timeLeft = 900; // 15 minutes in seconds

let timerInterval;

let selectedQuestions = []; // Array to hold the selected questions



// Function to start the quiz

function startQuiz() {

  // Shuffle and select 20 random questions

  selectedQuestions = shuffleArray(quizQuestions).slice(0, 20);



  // Hide the start button and display the first question

  document.getElementById("start-button").style.display = "none";

  displayQuestion();

  startTimer();

}



// Function to shuffle an array (Fisher-Yates shuffle)

function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];

  }

  return array;

}



// Function to display a question and its options

function displayQuestion() {

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  const questionText = document.getElementById("question-text");

  const answerButtons = document.getElementById("answer-buttons");



  // Clear previous question and answer options

  questionText.innerHTML = "";

  answerButtons.innerHTML = "";



  // Display the current question

  questionText.innerHTML = currentQuestion.question;



  // Create answer buttons for each option

  currentQuestion.options.forEach(option => {

    const button = document.createElement("button");

    button.innerText = option;

    button.classList.add("answer-button");

    answerButtons.appendChild(button);



    // Add click event listener to check the answer

    button.addEventListener("click", function() {

      checkAnswer(option);

    });

  });

}



// Function to check the selected answer

function checkAnswer(selectedOption) {

  const currentQuestion = selectedQuestions[currentQuestionIndex];



  // Check if the selected answer is correct

  if (selectedOption === currentQuestion.correctAnswer) {

    score++;

  }



  // Move to the next question or end the quiz if all questions are answered

  currentQuestionIndex++;



  if (currentQuestionIndex < selectedQuestions.length) {

    displayQuestion();

  } else {

    endQuiz();

  }

}



// function to start the timer

function startTimer() {

  timerInterval = setInterval(function() {

    timeLeft--;



    // Calculate minutes and seconds

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;



    // Update the timer text

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;



    // End the quiz if time runs out

    if (timeLeft <= 0) {

      endQuiz();

    }

  }, 1000);

}



// Function to end the quiz

function endQuiz() {

  // Stop the timer

  clearInterval(timerInterval);



  // Calculate the score percentage

  const wrongAns = selectedQuestions.length - score;



  // Display the final score

  const questionContainer = document.getElementById("question-container");

  const resultsWindow = document.getElementById("results-window");



  let message = `

    <h2>Quiz Completed!</h2>

    <p id="question-text">Your Score       : ${score} out of ${selectedQuestions.length}</p>

    <p id="question-text">Correct Answers  : ${score}</p>

  `;



  // Check score and show modal if score is less than 5

  if (score < 5) {

    message += `<p id="question-text">Better luck next time!</p>`;

  } else {

    message += `<p id="question-text">Congratulations!</p>`;

  }



  resultsWindow.innerHTML = message;

  resultsWindow.classList.remove("hidden");

}



// Function to close the results modal

function closeResultsModal() {

  const resultsWindow = document.getElementById("results-window");

  resultsWindow.classList.add("hidden");

}



// Add event listener to start the quiz when the start button is clicked

document.getElementById("start-button").addEventListener("click", startQuiz);



// Event listener to close modal when clicking outside

window.addEventListener("click", function(event) {

  const resultsWindow = document.getElementById("results-window");

  if (event.target === resultsWindow) {

    closeResultsModal();

  }

});