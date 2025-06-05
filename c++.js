const quizQuestions = [

  {

    question: "Who invented C++?",

    options: ["Dennis Ritchie","Ken Thompson","Brian Kernighan"," Bjarne Stroustrup"],
    
    correctAnswer: "  Bjarne Stroustrup"
   
  },

  {

    question: "Which of the following is the correct syntax of including a user defined header files in C++?",

    options: [" #include [userdefined] ", " #include “userdefined”", "#include <userdefined.h>", "#include <userdefined>"],

    correctAnswer: "#include “userdefined”"

  },

  {
    question: " Which of the following is used for comments in C++?",

    options: ["/* comment */ ", "// comment */ ", " // comment", " both // comment or /* comment */  "],

    correctAnswer: "both // comment or /* comment */ "

  },

  {

     question: "Which of the following extension is used for user-defined header file in c++?",

     options: ["hg", "cpp", "h", "hf"],

    correctAnswer: "h"

  },

  {

     question: "Which of the following is a correct identifier in C++?",

     options: ["VAR_1234", "$var_name", "7VARNAME", " 7var_name"],

     correctAnswer: "VAR_1234"

  },

  {

    question:"Which of the following is not a type of Constructor in C++?",

    options: ["Default constructor","Parameterized constructor","Copy constructor","Friend constructor"],

    correctAnswer:"Friend constructor"

  },

  {

      question:" Which of the following approach is used by C++?",

      options:["Left-right","Right-left","Bottom-up","Top-down"],

      correctAnswer:"Bottom-up"

    },

  {

    questio:" By default, all the files in C++ are opened in _________ mode.",

      options:["binary","VTC","TEXT","ISCII"],

      correctAnswer:"TEXT"

    },

  {

    question:" Which of the following correctly declares an array in C++?",

    options:["array{10};","array array[10];"," int array;","int array[10];"],

       correctAnswer:"int array[10];"

     },

  {

     question:"Which is more effective while calling the C++ functions?",

     options:["call by object","call by pointer","call by value","call by reference"],

    correctAnswer:"call by reference"

    },

  {

    question:"Which of the following is used to terminate the function declaration in C++?",

    options:[";","]",")",":"],

    correctAnswer:";"

    },

  {

    question:"Which keyword is used to define the macros in c++?",

    options:["#macro","#define","macro","define"],

    correctAnswer:"3define"

    },

  {

    question:"The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",

    options:["catch","throw","try","finally"],

    correctAnswer:"try"

    },

  {

    question:"Which of the following symbol is used to declare the preprocessor directives in C++?",

    options:["$","^","#","*"],

    correctAnswer:"#"

    },

  {

    question:"Which of the following constructors are provided by the C++ compiler if not defined in a class?	",

    options: ["Copy constructor","Default constructor"," Copy Assignment Operator","All of the mentioned"],

    correctAnswer:"All of the mentioned"

    },

    {

        question:" Which concept allows you to reuse the written code in C++?",

        options: ["inheritance","polymorphism"," abstraction","encapsulation"],

         correctAnswer:"inheritance"

      },

    {

      question:"What is the benefit of c++ input and output over c input and output?",

        options :["Both Type safety & Exception","Sequence container","Exception","Type safety"],

        correctAnswer:"Type safety"

    },

    {

    question:"Find the odd one out.",

    options:["std::vector<int>","std::vector<short>"," std::vector<long>","std::vector<bool>"],

         correctAnswer:"std::vector<bool>"

      },

    {

    question:" What is the value of the bool?",

    options:["true","false","1","2"],

         correctAnswer:"false"

      },

    {

    question:"Which of the two operators ++ and — work for the bool data type in C++?",

    options:["none","++","--","++ & --"],

    correctAnswer:"++"

    },

    {

    question:"How to declare a template?	",

    options:["tem","temp","template<>","temp()"],

    correctAnswer:"template<>"

    },

    {

    question:"How many types of templates are there in c++?",

    options:["1","2","3","4"],

    correctAnswer:"2"

    },

    {

    question:"Which are done by compiler for templates?",

    options:["type-safe"," portability","code elimination","prototype"],

      correctAnswer:"type-safe"

    },

    {

    question:" What may be the name of the parameter that the template should take?",

    options:[" same as template"," same as class"," same as function"," same as member"],

      correctAnswer:" same as template"

      },

      {

          question:"How many parameters are legal for non-type template?",

          options:["1","2","3","4"],

          correctAnswer:"4"

        },

      {

        question:"Where does the execution of the program starts?",

          options:["user-defined function","main function","void function","else function"],

          correctAnswer:"main function"

      },

      {

      question:"What is the scope of the variable declared in the user defined function?",

      options:["whole program","only inside the {} block","the main function"," header section"],

           correctAnswer:"only inside the {} block"

        },

      {

      question:" How many minimum number of functions should be present in a C++ program for its execution?",

      options:["0","1","2","3"],

           correctAnswer:"1"

        },

      {

      question:"Which of the following permits function overloading on c++?",

      options:[" type","number of arguments","type & number of arguments","number of objects"],

      correctAnswer:"type & number of arguments"

      },

      {

      question:"In which of the following we cannot overload the function?",

      options:["retutn function","caller","called function","main function"],

      correctAnswer:"return function"

      },

      {

        question:" Function overloading is also similar to which of the following?",
  
        options:["operator overloading","constructor overloading","destructor overloading","function overloading"],
  
        correctAnswer:"constructor overloading"
  
      },

      {

        question:"What should be passed in parameters when function does not require any parameters?",
  
        options:["void","blank space","both void & blank space","tab space"],
  
        correctAnswer:"blank space  "
  
      },


      {

        question:"Which header file is used to declare the complex number?",
  
        options:[" complexnum","complex"," complex number","complexarg"],
  
        correctAnswer:"complex"
  
      },

      {

        question:"How to declare the complex number?",
  
        options:["(3, 4)","complex(3, 4)","(3, 4i)","(3, 4g)"],
  
        correctAnswer:"complex(3, 4)"
  
      },


      {

        question:"Which of the following is not a function of complex values?",
  
        options:["real","imag","norm","cartesian"],
  
        correctAnswer:"cartesian"
  
      },


      {

        question:"Which keyword is used to declare the friend function",
  
        options:["friend","firend","classfriend","myfriend"],
  
        correctAnswer:"friend"
  
      },


      {

        question:"What is the syntax of friend function?",
  
        options:["friend class1 Class2;"," friend class;"," friend class"," friend class()"],
  
        correctAnswer:"friend class1 Class2;"
  
      },


      {

        question:"Where does keyword ‘friend’ should be placed?",
  
        options:["function declaration","function definition","main function","block function"],
  
        correctAnswer:"function declaration"
  
      },


      {

        question:"How to store the large objects in c++ if it extends its allocated memory?",
  
        options:["memory heap","stack","queue","stack&queue"],
  
        correctAnswer:"memory heap"
  
      },


      {

        question:" Which container in c++ will take large objects?",
  
        options:["string","class","vector","string & class"],
  
        correctAnswer:"vector"
  
      },


      {

        question:" What are the essential operators in c++?",
  
        options:["+","|","<=","all of the above"],
  
        correctAnswer:"all of the above"
  
      },


      {

        question:"Pick out the compound assignment statement.",
  
        options:["a = a – 5","a = a / b","a -= 5","a = a + 5"],
  
        correctAnswer:"a -= 5"
  
      },


      {

        question:"What is the associativity of add(+);?",
  
        options:["right to left","left to right","right to left & left to right","top to bottom"],
  
        correctAnswer:"left to right"
  
      },


      {

        question:"What is the name of | operator?",
  
        options:["sizeof","or","and","modulus"],
  
        correctAnswer:"or"
  
      },


      {

        question:"Which operator is having the highest precedence in c++?",
  
        options:["array subscript","Scope resolution operator","static_cast","dynamic_cast"],
  
        correctAnswer:"Scope resolution operator"
  
      },


      {

        question:"subscript operator is used to access which elements?",
  
        options:["string","char","array","float"],
  
        correctAnswer:"array"
  
      },

      {

        question:"How many arguments will the subscript operator will take for overloading?",
  
        options:["1","2","0","as many as possible"],
  
        correctAnswer:"1"
  
      },


      {

        question:"What do we need to do to pointer for overloading the subscript operator?",
  
        options:["reference pointer","dereference pointer"," store it in heap","memory locator"],
  
        correctAnswer:"dereference pointer"
  
      },


      {

        question:"Which is used to throw a exception?",
  
        options:["throw","try","catch","handler"],
  
        correctAnswer:"throw"
  
      },


      {

        question:"Which class is used to design the base class?",
  
        options:["abstract class","derived class","base class","derived & base class"],
  
        correctAnswer:"abstract class"
  
      },


      {

        question:"Which is used to create a pure virtual function?",
  
        options:["$","=0","&","!"],
  
        correctAnswer:"=0"
  
      },

      {

        question:"Which is also called as abstract class?",
  
        options:["virtual function","pure virtual function","derived class","base class"],
  
        correctAnswer:"pure virtual function"
  
      },

      {

        question:" Which is an instantiation of the basic_string class template?",
  
        options:["Character","string class","Memory","Iterator"],
  
        correctAnswer:"string class"
  
      },

      {

        question:"Which character is used to terminate the string?",
  
        options:["$","Null","Empty","@"],
  
        correctAnswer:"Null"
  
      },


      {

        question:"How does the strings are stored in the memory?",
  
        options:["Contiguous","Non-Contiguous","Null","sequence"],
  
        correctAnswer:"Contiguous"
  
      },


      {

        question:"Where are the strings stored?",
  
        options:["String","Heap","both","none"],
  
        correctAnswer:"both"
  
      },


      {

        question:"What will happen if a string is empty?",
  
        options:["t can’t be created","Raises an error","It can be used","It cannot be used"],
  
        correctAnswer:"It can be used"
  
      },


      {

        question:"Where are standard C libraries defined in C++?",
  
        options:["Container"," std namespace","list","iterators"],
  
        correctAnswer:" std namespace"
  
      },


      {

        question:"How does the limits.h header file can be represented in C++?",
  
        options:["limit","limits","climits","dlimits"],
  
        correctAnswer:"climits"
  
      },


      {

        question:"How many groups of output of operation are there in c++?",
  
        options:["1","2","3","4"],
  
        correctAnswer:"2"
  
      },


      {

        question:"Pick out the correct objects about the instantiation of output stream.",
  
        options:["cout","cerr","clog","all of the mentioned"],
  
        correctAnswer:"all of the mentioned"
  
      },


      {

        question:"What must be specified when we construct an object of class ostream?",
  
        options:["stream","streambuf"," memory","steamostream"],
  
        correctAnswer:"streambuf"
  
      },

      {

        question:"Which operator is used for input stream?",
  
        options:[">",">>","<","<<"],
  
        correctAnswer:">>"
  
      },


      {

        question:"Which is used to get the input during runtime?",
  
        options:["cout","cin","coi","cinout"],
  
        correctAnswer:"cin"
  
      },


      {

        question:"Which is used for formatting purpose in c++?",
  
        options:["Whitespace","Container","&","vector"],
  
        correctAnswer:"Whitespace"
  
      },


      {

        question:"How many number of spaces should be set in default tab?",
  
        options:["1","2","3","4"],
  
        correctAnswer:"4"
  
      },

      {

        question:"What can be improved by formatting the source code?",
  
        options:["memory","address","user interface","iterator"],
  
        correctAnswer:"user interface"
  
      },


      {

        question:"Choose the correct formatted code.",
  
        options:["int a = 5;"," int a=5;","int a =5;","int a5;"],
  
        correctAnswer:"int a = 5;"
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },
      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },


      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },



      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
      },

      {

        question:"",
  
        options:["","","",""],
  
        correctAnswer:""
  
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