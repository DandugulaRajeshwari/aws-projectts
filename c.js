const quizQuestions = [

  {

    question: "Who is the father of C language?",

    options: ["Steve Jobs","James Gosling","Dennis Ritchi","Rasmus Lerdorf"],

    correctAnswer: "Dennis Ritchi"

  },

  {

    question: "Which of the following is not a valid C variable name?",

    options: ["int number;", "float number1;", "double _number;", "int $main;"],

    correctAnswer: "int $main;"

  },

  {
    question: "All keywords in C are in ____________.",

    options: ["LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned"],

    correctAnswer: "LowerCase letters"

  },

  {

     question: "Which keyword is used to prevent any changes in the variable within a C program?",

     options: ["immutable", "mutable", "const", "volatile"],

    correctAnswer: "const"

  },

  {

     question: "What is the result of logical or relational expression in C?",

     options: ["True or False", "0 or 1", "0", "None"],

     correctAnswer: "0 or 1"

  },

  {

    question:"Which operator is used for bitwise AND in C?",

    options:["&&","||","&","|"],

    correctAnswer:"&"

  },

  {

      question:"What is the result of the following expression: 5 > 3 && 2 < 4?",

      options:["True","False","1","0"],

      correctAnswer:"1"

    },

  {

    questio:"Which is valid C expression?",

      options:["int my_num = 100,000;","int my_num = 100000;","int my num = 1000;","int $my_num = 10000;"],

      correctAnswer:"int my_num = 100000;"

    },

  {

    question:"Which of the following cannot be a variable name in C?",

    options:["volatile"," true","friend"," export"],

       correctAnswer:"volatile"

     },

  {

     question:"What is short int in C programming?",

    options:["basic data type ","Qualifier","short is Qualifier and int is data type","All of mentioned"],

       correctAnswer:"short is Qualifier and int is data type"

    },

  {

    question:"Which keyword is used to prevent any changes in the variable within a C program?",

    options:["immutable","mutable","const","volatile"],

    correctAnswer:"const"

    },

  {

    question:"Which of the following typecasting is accepted by C language?",

    options:["Widening conversions","Narrowing conversions","both ","None"],

    correctAnswer:"both"

    },

  {

    question:"What is an example of iteration in C?",

    options:["for","while","do-while","all of the mentioned"],

    correctAnswer:"all of the mentioned"

    },

  {

    question:"Which of the following is not a standard data type in C?",

    options:["int","char","boolean","float"],

    correctAnswer:"boolean"

    },

  {

    question:"Functions can return enumeration constants in C?",

    options:["true","false","depends on compiler","depends on the standard"],

    correctAnswer:"true"

    },

    {

        question:"Which Keyword is used to define a constant in C?",

        options:["constant","const","define","static"],

        correctAnswer:"const"

      },

    {

      question:"Which function is used to find the length of a string in C?",

        options:["strlen()","strlength()","length()","size()"],

        correctAnswer:"strlen()"

    },

    {

    question:"Which of the following data types has the largest range in C?",

    options:["int","char","double","float"],

         correctAnswer:"double"

      },

    {

    question:"Which of the following is used to store a single character in C?",

    options:["String","Char","character","text"],

         correctAnswer:"Char"

      },

    {

    question:"Which of the following is not a valid C loop?",

    options:["for","do-while","while","foreach"],

    correctAnswer:"foreach"

    },

    {

    question:" Functions in C Language are always _________",

    options:["Internal","External","Internal and External","Invalid"],

    correctAnswer:"External"

    },

    {

    question:" Property which allows to produce different executable for different platforms in C is called?",

    options:["File inclusion","Selective inclusion","Conditional compilation","Recursive macros"],

    correctAnswer:"Conditional compilation"

    },

    {

    question:" What is #include <stdio.h>?",

    options:["Preprocessor directive","Inclusion directive","File inclusion directive","None"],

      correctAnswer:"Preprocessor directive"

    },

    {

    question:"C preprocessors can have compiler specific features.",

    options:["True","False","depends on the standard","depends on the platform"],

      correctAnswer:"True"

      },

      {

          question:" Which of the following are C preprocessors?",

          options:["#ifdef","#define","#endif","all of the above"],

          correctAnswer:"all of the above"

        },

      {

        question:"The C-preprocessors are specified with _________ symbol.",

        options:["#","$"," @ ","&"],

        correctAnswer:"#"

      },

      {

      question:"How many number of pointer (*) does C have against a pointer variable declaration?",

      options:["7","127","255","No Limits"],

      correctAnswer:"No Limits"

      },

      {

      question:"Which of the following return-type cannot be used for a function in C?",

      options:["char*","struct","void","None"],

           correctAnswer:"None"

        },

      {

      question:"The standard header _______ is used for variable list arguments (…) in C.?",

      options:["<stdio.h>","<stdlib.h>","<math.h>","<stdarg.h>"],

      correctAnswer:"<stdarg.h>"

      },

      {

      question:" When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",

      options:[" Standard input","Standard output","Standard error","All of the mentioned"],

      correctAnswer:"All of the mentioned"

      },

      {

      question:" In C language, FILE is of which data type?",

      options:["int ","char*","struct","None"],

      correctAnswer:"struct"

      },

      {

      question:"What is the sizeof(char) in a 32-bit C compiler?",
      options:["1 bit","2 bit","1 byte","2 byte"],

        correctAnswer:"1 byte"

      },

      {

      question:"Which of the following is not an operator in C?",

      options:[",","size()","~","None"],

        correctAnswer:"None"

        },

        {

            question:"scanf() is a predefined function in______header file.",

            options:["stdlib.h","ctype.h","stdio.h","string.h"],

            correctAnswer:"stdio.h"

          },

        {

          question:"What is the 16-bit compiler allowable range for integer constants?",

          options:["-3.4e38 to 3.4e38","-32767 to 32768","-32668 to 32667","-32768 to 32767"],

          correctAnswer:"-32768 to 32767"

        },

        {

        question:"Directives are translated by the",

        options:["Pre-Processor","Compiler","Linker","Editor"],

        correctAnswer:"Pre-Processor"

        },

        {

        question:"How many bytes does 'int = D' use?",

        options:["0","1","2 or 4","10"],

        correctAnswer:"2 or 4"

        },

        {

        question:"Which of the following operations cannot be performed in file handling?",

        options:["Open the file","Read the file","To write a file","None"],

        correctAnswer:"None"

        },

        {

        question:"Which of the following function is used to write the integer in a file?",

        options:["getw()","putw()","int value","f_int()"],

        correctAnswer:"putw()"

        },

        {

        question:"In which of the following modes, the user can read and write the file?",

        options:["r","w","r+","b+"],

        correctAnswer:"r+"

        },

        {

        question:"Array is a _________ data structure.",

        options:["Non-linear","Primary","Linear","Data type"],

          correctAnswer:"Linear"

  },

 {

    question:"Which of the following functions is already declared in the 'header file'?",

    options:["User-define functions","Built-in functions","C functions","None"],

    correctAnswer:"Built-in functions"

  },

  {

  question:"Which of the following is an important requirement of c programming?",

  options:["function","Input variables","output variables","All of the mentioned"],

  correctAnswer:"function"

   },

   {

   question:"Which of the following is not related to c programming?",

   options:["conio.h","getch()","console.log","All of the mentioned"],

   correctAnswer:"console.log"

    },

    {

    question:" What is function overloading?",

    options:["Process of multiple functions","Multiple functions with the same name","Looping functions","All of the above"],

    correctAnswer:"Multiple functions with the same name"

     },



 {

    question:"What is a function?",

    options: ["Looping code", "Code that operates when called", "Unknown variable", "All of the above"],

    correctAnswer: "Code that operates when called "

  },

  {

    question: "The C-preprocessors are specified with _________ symbol.",

    options: ["#", "$", "&", "*"],

    correctAnswer: "#"

  },

  {

     question:"Which of the following are C preprocessors?",

     options: ["#ifdef", "#define", "#endif", "All of the mentioned"],

     correctAnswer: "All of the mentioned"

  },

  {

    question:"Which of the following return-type cannot be used for a function in C?",

    options: ["char *", "struct", "void", "None of the mentioned"],

    correctAnswer: "None of the mentioned"

   },

   {

     question:"What is the sizeof(char) in a 32-bit C compiler?",

     options: ["1 bit", "2 bits", "1 byte", "2 bytes"],

     correctAnswer: "1 byte"

   },

   {

      question: "Which of these is NOT a relational or logical operator?",

      options: ["=", "||", "==", "!="],

      correctAnswer: "="

   },

   {

    question: "Which one of the following is a loop construct that will always be executed once?",

    options: ["for", "while", "switch", "do while"],

    correctAnswer: "do while"

   },

   {

    question: "Directives are translated by the ___________.",

    options: ["Pre-processor", "Compiler", "Linker", "Editor"],

    correctAnswer: "Pre-processor"

   },

   {

    question: "while(condition); -justify the given statement?",

    options: [ "Invalid statement", "Valid statement","Syntax error", "None of the mentioned"],

    correctAnswer: "Valid statement"

   },

   {

    question: "The binary equivalent of 50 is _____________.",

    options: ["110010","1010110","101","101.011.00.00"],

    correctAnswer: "110010"

   },

   {

     question: "Which function is often used to output values and print text?",

     options: ["printf()","output()","write()","printword()"],

     correctAnswer: "printf()"

    },

   {

     question: "Which format specifier is often used to print integers?",

     options: ["%f","%d","%s","%c"],

     correctAnswer: "%d"

    },

    {

      question: "Which keyword is used to return a value inside a function?",

      options: ["break","void","get","return"],

      correctAnswer: "return"

    },

    {

      question: "Which statement can be used to select one of many code blocks to be executed?",

      options: ["break","when","default","switch"],

      correctAnswer: "switch"

    },

    {

      question: "for(;;) - output for the given code",

      options: ["Infinite loop","1","0","Syntax-error"],

      correctAnswer: "Infinite loop"

    },		  

    {

      question: "Which of the following is not a variable type in c programming?",

      options: ["float","int","while loop","All of the above"],

      correctAnswer: "while loop"

    },	

    {

      
      question: "What are float variables?",

      options: ["Integer value","unkown value","Decimal value","all of the above"],

      correctAnswer: "Decimal value "

    },	

    {

      question: "How many variables can the following string contain bat[45]?",

      options: ["20","40","44","45"],

      correctAnswer: "45 "

    },	

    {

      question: "Which header file uses gets()?",

      options: ["studio.h","stdlib.h","conio.h","All of the above"],

      correctAnswer: "conio.h"

    },	

    {

      question: "Which of the following is the wrong way of writing c language?",

      options: ["Int bat;","Float cat_a","Int @rat","All of the above"],

      correctAnswer: "Int @rat"

    },	

    {

      question: " What are const data types used for?",

      options: ["Unknown values","Static or constant values","Dynamic variable values","All of the above"],

      correctAnswer: "Static or constant values"

    },	

    {

      question: "When was C programming developed?",

      options: ["The 1950s","The 1960s","The 1980s","The 1970s"],

      correctAnswer: "The 1970s "

    },	

    {

      question: "What was C programming adapted from?",

      options: ["C++","Combined programming language","python","all of the above"],

      correctAnswer: "Combined programming language "

    },	

    {

      question: "We cannot use the keyword ‘break’ simply within _________.",

      options: ["while","for","if-else","do-while"],

      correctAnswer: "if-else"

    },	

    {

      question: "Out of the following snippet, which one will generate random numbers effectively?",

      options: ["rand(time(NULL));","rand(10);","rand();","all of the above"],

      correctAnswer: "rand();"

    },	

    {

      question: "The definition of the function abort() is in which header file?",

      options: ["stdlib.h","assert.h","stdio.h","stdarg.h"],

      correctAnswer: "stdlib.h"

    },	

    {

      question: "Which of the following are correct file opening modes in C?",

      options: ["r","rb","w","all of the above"],

      correctAnswer: "all of the above"

    },	

    {

      question: "What is the result of bitwise XOR (^) operation between 5 and 3 in C?",

      options: ["0","1","2","8"],

      correctAnswer: "0"

    },	


    {

      question: "In C, which function is used to close a file?",

      options: ["close()","fclose()","file_close()","endfile()"],

      correctAnswer: "fclose()"

    },	

    {

      question: " Which of the following functions is used to compare two strings in C?",

      options: ["compare()","strcmp()","strcompare()","strcasecmp()"],

      correctAnswer: "strcmp()"

    },	

    {

      question: "Which header file is needed to use dynamic memory allocation functions like `malloc` and `free` in C?",

      options: ["<stdlib.h>","<memory.h>","<malloc.h>","<stdio.h>"],

      correctAnswer: "<stdlib.h>"

    },	

    {

      question: "In C, which operator is used for logical AND?",

      options: ["&&","&","and","AND"],

      correctAnswer: "&&"

    },	

    {

      question: "Which function is used to read a character from the standard input in C?",

      options: ["getc()","read()","getchar()","scan()"],

      correctAnswer: "getchar()"

    },	

    {

      question: "In C, what is the result of `sizeof(char)`?",

      options: ["1","2","4","depends on the system"],

      correctAnswer: "1"

    },	

    {

      question: "In C, what does the `<<` operator represent in the context of bitwise operations?",
      
      options: ["logical OR","logical AND","bitwise left shift","bitwise right shift"],

      correctAnswer: "bitwise left shift"

    },	

    {

      question: "Which standard C library function is used to compare two blocks of memory in C?",

      options: ["memcmp()","memcomp()","memcompare()","comparemem()"],

      correctAnswer: "memcmp()"

    },	

    {

      question: "In C, which operator is used to access the address of a variable?",

      options: ["& (ampersand)","* (asterisk)","@ (at)","# (hash)"],

      correctAnswer: "& (ampersand)"

    },	

    {

      question: "Which header file is required to work with file I/O in C?",

      options: ["<io.h>","<fileio.h>","<stdio.h>","<inputoutput.h>"],

      correctAnswer: "<stdio.h>"

    },	

    {

      question: " In C, which operator is used for bitwise OR?",

      options: ["| (pipe)","|& (pipe-ampersand)","|* (pipe-asterisk)","|| (logical OR)"],

      correctAnswer: "| (pipe)"

    },	

    {

      question: "Which  is  not arithmetic operators in C?",

      options: ["+","-","*","@"],

      correctAnswer: "@"

    },	

    {

      question: "C is ______ level language. ",

      options: ["high","low","middle","machine"],

      correctAnswer: "middle"

    },	

    {

      question: " C is _______ type of programming language.?",

      options: ["Object Oriented "," Procedural ","Bit level language "," Functional "],

      correctAnswer: "Procedural"

    },	

    {

      question: "C language is used in the development of .?",

      options: ["Databases","Graphic applications"," Word Processors","All of the above"],

      correctAnswer: "All of the above"

    },	

    {

      question: " A C program is a combination of.",

      options: ["Statements ","functions","variables","all of the above"],

      correctAnswer: "all of the above"

    },	

    {

      question: " Find a correct C Keyword. ",

      options: ["Float","Int","Long","double"],

      correctAnswer: "double"

    },	

    {

      question: "Range of signed char and unsigned char are__________? ",

      options: ["-128 to +127 & 0 to 255","0 to 255 & -128 to +127","-128 to -1 & 0 to +127 ","0 to +127 & -128 to -1"],

      correctAnswer: "-128 to +127 & 0 to 255"

    },	

    {

      question: "Size of float, double and long double in Bytes are____? ",

      options: ["4,8,16","4,8,10","2,4,6","4,6,8"],

      correctAnswer: "4,8,10"

    },	

    {

      question: " Every C Variable must have______?",

      options: ["Type","Storage Class","Both","none"],

      correctAnswer: "Both"

    },	

    {

      question: " Find a C Storage Class below.",

      options: ["static","auto","register&extern","all of the above"],

      correctAnswer: "all of the above"

    },	

    {

      question: "What is the default C Storage Class for a variable?",

      options: ["static","auto","register","extern"],

      correctAnswer: "auto"

    },	

    {

      question: " Variables of type auto, static and extern are all stored in _________? ",

      options: ["ROM","RAM","CPU","COMPILER"],

      correctAnswer: "RAM"

    },	

    {

      question: " Which among the following is a Global Variable?",

      options: ["auto","static","register","extern"],

      correctAnswer: "extern"

    },	

    {

      question: "What is a Single Operand Operator below?",

      options: ["&","|","^","~"],

      correctAnswer: "~"

    },	

    {

      question: " Left Shift operation is equivalent to________?",

      options: ["Division by 2","Multiplying by 2","Adding 2","Subtracting 2"],

      correctAnswer: "Multiplying by 2"

    },	

    {

      question: " Right Shift operation >> is equivalent to __________ ",

      options: ["Division by 2","Multiplying by 2","Adding 2 ","Subtracting 2"],

      correctAnswer: "Division by 2"
      

    },	

    {

      question: " Choose a C Conditional Operator from the list.",

      options: ["?:",":?",":<","<:"],

      correctAnswer: "?:"

    },	

    {

      question: " A function which calls itself is called a ___ function.",

      options: ["self function","auto function","recursive function","static function"],

      correctAnswer: "recursive function"

    },	

    {

      question: "How many values can a C Function return at a time.? ",

      options: ["only one value","maximum of two vali=ues","maximum of three values","maximum of 8 values"],

      correctAnswer: "only one value"

    },	

    {

      question: " Every C Program should contain which function.?",

      options: ["printf()","scanf()","show()","main()"],

      correctAnswer: "main()"

    },	

    {

      question: " A recursive function is faster than __ loop.",

      options: ["for","while","do-while","none"],

      correctAnswer: "none"

    },	

    {

      question: " What are the Types of Arrays.? ",

      options: ["int, long, float, double "," struct, enum","char","all of the above"],

      correctAnswer: "all of the above"

    },	

    {

      question: "an array index starts with______",

      options: ["-1","0","1","2"],

      correctAnswer: "0"

    },	

    {

      question: " What is the dimension of the C array int ary[10][5].? ",

      options: ["1","2","5","10"],

      correctAnswer: "2"

    },	

    {

      question: "Array of Arrays is also called.?",

      options: ["Multi Data Array","Multi Size Array","Multi Dimensional Array","Multi Byte Array"],

      correctAnswer: "Multi Dimensional Array"

    },	

    {

      question: " What is the keyword used to declare a C file pointer.?",

      options: ["file","FILE","FILEFP","filefp"],

      correctAnswer: "FILE"

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