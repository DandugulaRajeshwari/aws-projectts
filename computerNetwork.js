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
  
      questio:"Which of the following is not a valid variable name in Java?",
  
        options:["total","_sum","valued_1","1valued"],
  
        correctAnswer:"1valued"
  
      },
  
    {
  
      question:"Identify the return type of a method that does not return any value",
  
      options:["int","void","double","none"],
  
         correctAnswer:"void"
  
       },
  
    {
  
       question:"Output of Math.floor(3.6)?",
  
      options:["3","3.0","4","4.0"],
  
         correctAnswer:"3.0"
  
      },
  
    {
  
      question:"Number of primitive data types in Java are?",
  
      options:["6","7","8","9"],
  
      correctAnswer:"7"
  
      },
  
    {
  
      question:"What is the size of float and double in java?",
  
      options:["32 and 64","32 and 32","64 and 64","64 and 32"],
  
      correctAnswer:"32 and 64"
  
      },
  
    {
  
      question:"What is the default value of an instance variable of type int in Java?",
  
      options:["0","NULL","\0","Undefined"],
  
      correctAnswer:"0"
  
      },
  
    {
  
      question:"Which of the following is not a standard data type in C?",
  
      options:["int","char","boolean","float"],
  
      correctAnswer:"boolean"
  
      },
  
    {
  
      question:"	Which of the following is not a Java features?",
  
      options:["Dynamic","WORA","Use of pointers","Object-oriented"],
  
      correctAnswer:"Use of pointers"
  
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
  
      question:"	Exception created by try block is caught in which block?",
  
      options:["catch","throw","final","none"],
  
      correctAnswer:"catch"
  
      },
  
      {
  
      question:"Automatic type conversion is possible in which of the possible cases?",
  
      options:["byte to int","int to long","long to int","short to int"],
  
      correctAnswer:"int to long"
  
      },
  
      {
  
      question:"Arrays in java are-",
  
      options:["Object references","object","Primitive data type","None"],
  
        correctAnswer:"object"
  
      },
  
      {
  
      question:"When is the object created with new keyword?",
  
      options:["At run time","At compile time","Depends on the code","None"],
  
        correctAnswer:"At run time"
  
        },
  
        {
  
            question:"compareTo() returns",
  
            options:["True","False","An int value","None"],
  
            correctAnswer:"An int value"
  
          },
  
        {
  
          question:"To which of the following does the class string belong to?",
  
            options:["java.lang","java.awt","java.applet","java.string"],
  
            correctAnswer:"java.lang"
  
        },
  
        {
  
        question:"Where does the system stores parameters and local variables whenever a method is invoked?",
  
        options:["Heap","Stack","Tree","Array"],
  
             correctAnswer:"Stack"
  
          },
  
        {
  
        question:"Identify the modifier which cannot be used for constructor?",
  
        options:["public","protected","private","static"],
  
             correctAnswer:"static"
  
          },
  
        {
  
        question:"What is Runnable?",
  
        options:["Abstract class","Interface","Class","Method"],
  
        correctAnswer:"Interface"
  
        },
  
        {
  
        question:"Which of the following is used to find and fix bugs in the program?",
  
        options:["JDK","JRE","JVM","JDB"],
  
        correctAnswer:"JVM"
  
        },
  
        {
  
        question:"Which component is used to compile, debug and execute the java programs?",
  
        options:["JRE","JVM","JIT","JDK"],
  
        correctAnswer:"JDK"
  
        },
  
        {
  
        question:"What is the extension of java code files?",
  
        options:[".txt",".js",".class",".java"],
  
          correctAnswer:".java"
  
        },
  
        {
  
        question:"Which of the following is a superclass of every class in Java?",
  
        options:["ArrayList","Abstract class","Object class","String"],
  
          correctAnswer:"Object class"
  
          },
  
          {
  
              question:"Which of the following is not an OOPS concept in Java?",
  
              options:["Polymorphism","Inheritance","Compilation","Encapsulation"],
  
              correctAnswer:"Compilation"
  
            },
  
          {
  
            question:"Which of these keywords are used for the block to be examined for exceptions?",
  
              options:["check","throw","catch","try"],
  
              correctAnswer:"try"
  
          },
  
          {
  
          question:"In Java, how should class names be written?",
  
          options:["CamelCase","snake_case","pascalCase","None"],
  
               correctAnswer:"CamelCase"
  
            },
  
          {
  
          question:"Which of these is a single-line comment in Java?",
  
          options:["/comment/","//comment","/* comment */","%Comment"],
  
               correctAnswer:"//comment"
  
            },
  
          {
  
          question:"Which data type would be best for storing a person's age in Java?",
  
          options:["int","double","long","byte"],
  
          correctAnswer:"byte"
  
          },
  
          {
  
          question:"What is the default value of a boolean variable in Java?",
  
          options:["trye","false","0","null"],
  
          correctAnswer:"false"
  
          },
  
          {
  
          question:"What is the result of this operation in Java:(int)(7.9)?",
  
          options:["7","7.9","8","9"],
  
          correctAnswer:"7"
  
          },
  
          {
  
          question:"Which keyword is used to define a constant variable in Java?",
  
          options:["final","static","const","immutable"],
  
            correctAnswer:"final"
  
    },
  
   {
  
      question:"Identify the interface which is used to declare core methods in java?",
  
      options:["Comparator","EventListener","Set","Collection"],
  
      correctAnswer:"Collection"
  
    },
  
    {
  
    question:"What does the operator >> do?",
  
    options:["Right-Shift","Left-Shift","shift","None"],
  
    correctAnswer:"Right-Shift"
  
     },
  
     {
  
     question:"Function to find length of the string?",
  
     options:["length()","len()","len","length"],
  
     correctAnswer:"length()"
  
      },
  
      {
  
      question:"Function to find length of the array?",
  
      options:["length()","len()","len","length"],
  
      correctAnswer:"length"
  
       },
  
  
  
   {
  
      question:"What is an example of iteration in C?",
  
      options: ["for", "while", "do-while", "All of the mentioned"],
  
      correctAnswer: "All of the mentioned"
  
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