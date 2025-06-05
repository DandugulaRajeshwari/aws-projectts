const quizQuestions = [

  {

    question: "K-Nearest Neighbors (KNN) is classified as what type of machine learning algorithm?",

    options: ["Instance-based learning","Parametric learning","Non-parametric learning","Model-based learning"],

    correctAnswer: "Instance-based learning"

  },

  {

    question: "Which of the following is not a supervised machine learning algorithm?",

    options: ["K-means","Naïve Bayes","SVM for classification problems","Decision tree"],

    correctAnswer: "K-means"

  },

  {

    question: "Which algorithm is best suited for a binary classification problem?",

    options: ["K-nearest Neighbors","Decision Trees","Random Forest","Linear Regression"],

    correctAnswer: "Decision Trees"

  },


  {

    question: "Which type of machine learning algorithm falls under the category of “unsupervised learning”?",

    options: ["Linear Regression","K-means Clustering","Decision Trees","Random Forest"],

    correctAnswer: "K-means Clustering"

  },

  {

    question: "Which one of the following models is a generative model used in machine learning?",

    options: ["Support vector machines","Naïve Bayes","Logistic Regression","Linear Regression"],

    correctAnswer: "Naïve Bayes"

  },

  {

    question: "An artificially intelligent car decreases its speed based on its distance from the car in front of it. Which algorithm is used?",

    options: ["Naïve-Bayes","Decision Tree","Linear Regression","Logistic Regression"],

    correctAnswer: "Linear Regression"

  },


  {

    question: "How are the points in the domain set given as input to the algorithm?",

    options: ["Vector of features","Scalar points","Polynomials","Clusters"],

    correctAnswer: "Vector of features"

  },

  {

    question: "To which input does the learner has access to?",

    options: ["Testing Data","Label Data","Training Data","Cross-Validation Data"],

    correctAnswer: "Training Data"

  },

  {

    question: "The set which represents the different instances of the target variable is known as ______",

    options: ["domain set","training set","label set","test set"],

    correctAnswer: "label set"

  },

  {

    question: "What is not accessible to the learner?",

    options: ["Training Set","Label Set","Labeling Function","Domain Set"],

    correctAnswer: "Labeling Function"

  },


  {

    question: "What is one of the drawbacks of Empirical Risk Minimization?",

    options: ["Underfitting","Both Overfitting and Underfitting","Overfitting","No drawbacks"],

    correctAnswer: "Overfitting"

  },


  {

    question: "The error available to the learner is ______",

    options: ["true error","error of the classifier","training error","testing error"],

    correctAnswer: "training error"

  },


  {

    question: "The assumption that the training set instances are independently and identically distributed is known as the __________",

    options: ["empirical risk assumption","inductive bias assumption","i.i.d. assumption","training set rule"],

    correctAnswer: "i.i.d. assumption"

  },


  {

    question: "Delta is the __________ parameter of the prediction.",

    options: ["training","confidence","accuracy","computing"],

    correctAnswer: "confidence"

  },


  {

    question: "Who introduced the concept of PAC learning?",

    options: ["Francis Galton","Reverend Thomas Bayes","J.Ross Quinlan","Leslie Valiant"],

    correctAnswer: "Leslie Valiant"

  },

  {

    question: "When was PAC learning invented?",

    options: ["1874","1974","1984","1884"],

    correctAnswer: "1984"

  },


  {

    question: "What can be explained by PAC learning?",

    options: ["Sample Complexity","Overfitting","Underfitting","Label Function"],

    correctAnswer: "Sample Complexity"

  },


  {

    question: "One of the goals of PAC learning is to give __________",

    options: ["maximum accuracy","cross-validation complexity","error of classifier","computational complexity"],

    correctAnswer: "computational complexity"

  },


  {

    question: "A learner can be deemed consistent if it produces a hypothesis that perfectly fits the __________",

    options: ["cross-validation data","overall dataset","test data","training data"],

    correctAnswer: "training data"

  },


  {

    question: "Number of hypothesizes |H| = 973, probability = 95%, error < 0.1. Find minimum number of training examples, m, required.",

    options: ["98.8","99.8","99","98"],

    correctAnswer: "99"

  },

  {

    question: "How do we learn concepts from training examples?",

    options: ["Arbitrarily","Decremental","Incrementally","Non-incremental"],

    correctAnswer: "Incrementally"

  },


  {

    question: "Which is not a concept learning algorithm?",

    options: ["ID3","Find-S","Candidate Elimination","List-Then-Eliminate"],

    correctAnswer: "ID3"

  },


  {

    question: " In the list-then-eliminate algorithm, the initial version space contains _____",

    options: ["most specific hypothesis","all hypotheses in H","most accurate hypothesis","most general hypothesis"],

    correctAnswer: "all hypotheses in H"

  },

  {

    question: "What happens to the version space in the list-then-eliminate algorithm, at each step?",

    options: ["Remains the same","Increases","Shrinks","Depends on dataset"],

    correctAnswer: "Shrinks"

  },

  {

    question: "For a dataset with 4 attributes, which is the most general hypothesis?",

    options: ["(Sunny, Warm, Strong, Humid)","(Sunny, ?, ?, ?)","++++++++(?, ?, ?, ?)","(phi, phi, phi, phi)"],

    correctAnswer: "(?, ?, ?, ?)"

  },

  {

    question: "How is a hypothesis represented in concept learning?",

    options: ["Scalar","Vector","Polynomial","Either scalar or vector"],

    correctAnswer: "Vector"

  },

  {

    question: "How does the hypothesis change gradually?",

    options: ["Specific to Specific","Specific to General","General to Specific","General to General"],

    correctAnswer: "Specific to General"

  },

  {

    question: "S = <phi, phi, phi>Training data = <rainy, cold, white> => No (negative example). How will S be represented after encountering this training data?",

    options: ["<phi, phi, phi>","<sunny, warm, white>","<rainy, cold, black>","<?, ?, ?>"],

    correctAnswer: "<phi, phi, phi>"

  },

  {

    question: "An instance set S is given. How many dichotomies are possible?",

    options: ["2*|S|","2/|S|","2^|S|","|S|"],

    correctAnswer: "2^|S|"

  },


  {

    question: "If h is a straight line, what is the maximum number of points that can be shattered?",

    options: ["4","2","3","5"],

    correctAnswer: "3"

  },


  {

    question: " A set of 3 instances is shattered by _____ hypotheses.",

    options: ["4","8","3","2"],

    correctAnswer: "8"

  },


  {

    question: "What is the relation between VC dimension and hypothesis space H?",

    options: ["VC(H) <= |H|","VC(H) != log2|H|","VC(H) <= log2|H|","VC(H) > log2|H|"],

    correctAnswer: "VC(H) <= log2|H|"

  },


  {

    question: "Who invented VC dimension?",

    options: ["Francis Galton","J. Ross Quinlan","Leslie Valiant","Vapnik and Chervonenkis"],

    correctAnswer: "Vapnik and Chervonenkis"

  },


  {

    question: " S = {x0, x1, x2}. Hypotheses are of the form a < x < b. What is H?",

    options: ["infinite","0","2","1"],

    correctAnswer: "infinite"

  },

  {

    question: " S = {x0, x1, x2}. Hypotheses are of the form a < x < b. What is VC(H)?",

    options: ["0","2","1","infinite"],

    correctAnswer: "2"

  },


  {

    question: "PAC learning was introduced by ____________",

    options: ["Vapnik","Leslie Valiant","Chervonenkis","Reverend Thomas Bayes"],

    correctAnswer: "Leslie Valiant"

  },


  {

    question: "How is the hypothesis represented in multivariate regression? Transpose of matrix a is represented as aT.",

    options: ["h(X) = tTX","h(X) = tX","h(X) = tXT","h(X) = tTXT"],

    correctAnswer: "h(X) = tTX"

  },

  {

    question: "Let there be n features. What is the dimension of the X vector in hypothesis h(X) = tTX?",

    options: ["n x 1","(n + 1) x 1","n x n","(n-1) x 1"],

    correctAnswer: "(n + 1) x 1"

  },


  {

    question: "What is the minimum number of variables required to represent a linear regression model?",

    options: ["3","2","1","4"],

    correctAnswer: "4"

  },


  {

    question: "The cost function is minimized by __________",

    options: ["Linear regression","Polynomial regression","PAC learning","Gradient descent"],

    correctAnswer: "Gradient descent"

  },


  {

    question: "What is the minimum number of parameters of the gradient descent algorithm?",

    options: ["1","2","3","4"],

    correctAnswer: "3"

  },

  {

    question: "h(x) = t0 + t1x + t2x2. t0 = t1 = t2 = 1. X is the size of the house. For what value of x, h(x) is minimum?",

    options: ["-1","0","0 or -1","1"],

    correctAnswer: "1"

  },


  {

    question: "h(x) = t0 + t1x + t2x2. t0 = 0, t1 = t2 = 1. X is the size of the house. For what value of x, h(x) is minimum?",

    options: ["-1","0","0 or -1","1"],

    correctAnswer: "0"

  },


  {

    question: "What kind of algorithm is logistic regression?",

    options: ["Cost function minimization","Ranking","Regression","Classification"],

    correctAnswer: "Classification"

  },


  {

    question: "Can a cancer detection problem be solved by logistic regression?",

    options: ["Sometimes","No","Yes","Depends on the dataset"],

    correctAnswer: "Yes"

  },


  {

    question: "In a logistic regression problem, what is a possible output for a new instance?",

    options: ["0.85","-0.19","1.20","89%"],

    correctAnswer: "0.85"

  },


  {

    question: "Who invented logistic regression?",

    options: ["Vapnik","Ross Quinlan","DR Cox","Chervonenkis"],

    correctAnswer: "DR Cox"

  },


  {

    question: "An artificially intelligent car decreases its speed based on its distance from the car in front of it. Which algorithm is used?",

    options: ["Decision Tree","Naïve-Bayes","Logistic Regression","Linear Regression"],

    correctAnswer: "Linear Regression"

  },


  {

    question: "What function is used for hypothesis representation in logistic regression?",

    options: ["Cos function","Laplace transformation","Lagrange’s function","Sigmoid function"],

    correctAnswer: "Sigmoid function"

  },


  {

    question: "Probability of an event occurring is 1.2. What is odds ratio?",

    options: ["6:1","-6:1","Undefined","1:2"],

    correctAnswer: "Undefined"

  },


  {

    question: "Probability of an event occurring is 0.9. What is odds ratio?",

    options: ["0.9:1","9:1","1:9","1:0.9"],

    correctAnswer: "9:1"

  },

  {

    question: "Which of the following is a solution for the problem, where the classifiers erroneously give unusual low or high support to a particular class?",

    options: ["Maximum rule","Minimum rule","Product rule","Trimmed mean rule"],

    correctAnswer: "Trimmed mean rule"

  },

  {

    question: "Which of the following is not a problem independent ECOC design?",

    options: ["One-versus-all","SFFS criterion","One-versus-one","Dense Random"],

    correctAnswer: "SFFS criterion"

  },


  {

    question: "Which of the following is not a problem dependent ECOC design?",

    options: ["Sparse Random","DECOC","ECOC-ONE","Forest-ECOC"],

    correctAnswer: "Sparse Random"

  },


  {

    question: "Which of the following ECOC designs uses n = (Nc−1).T dichotomizers, where T stands for the number of binary tree structures to be embedded?",

    options: ["DECOC","One-versus-all","Forest-ECOC","One-versus-one"],

    correctAnswer: "Forest-ECOC"

  },



  {

    question: "Given the two strings “cats” and “dogs”. What is the Hamming distance between two strings?",

    options: ["4","3","2","5"],

    correctAnswer: "3"

  },

  {

    question: "What is the hamming distance between the binary values 100111010 and 101111111?",

    options: ["9","7","5","3"],

    correctAnswer: "3"

  },

  {

    question: "How many single bit errors take to turn “cow” to “fox”?",

    options: ["2","0","1","3"],

    correctAnswer: "2"

  },

  {

    question: "Which of the following is not related to boosting?",

    options: ["Non uniform distribution","Re-weighting","Re-sampling","Sequential style"],

    correctAnswer: "Re-sampling"

  },


  {

    question: "Consider the two instances having errors 0.4, 0.5. Then what will be the weights of the classifier for these two instances?",

    options: ["0.401, 0.5","0.903, 0.1","0.304, 0.6","0.205, 0"],

    correctAnswer: "0.205, 0"

  },


  {

    question: "Which of the following is an example of stacking?",

    options: ["AdaBoost","Random Forest","Bagged Decision Trees","Voting Classifier"],

    correctAnswer: "Voting Classifier"

  },


  {

    question: "What is the gradient of the function 2x2 – 3y2 + 4y – 10 at point (0, 0)?",

    options: [" 0i + 4j","1i + 10j","2i – 3j","-3i + 4j"],

    correctAnswer: " 0i + 4j"

  },


  {

    question: "Which of the following is not related to a gradient descent?",

    options: ["AdaBoost","Adadelta","Adagrad","RMSprop"],

    correctAnswer: "AdaBoost"

  },


  {

    question: "Which of the following objective functions is not solved by Subgradient?",

    options: ["Hinge loss","L1 norm","Perceptron loss","TanH function"],

    correctAnswer: "TanH function"

  },

  {

    question: "Given the current bias b = 0, learning rate = 0.01 and gradient = -4.2. What will be the b’ value after the update?",

    options: ["-0.42","0.042","0.42","-0.042"],

    correctAnswer: "0.042"

  },

  {

    question: "Which of the following is not a variant of stochastic gradient descent?",

    options: ["Adding a projection step","Variable step size","Strongly convex functions","Strongly non convex functions"],

    correctAnswer: "Strongly non convex functions"

  },


  {

    question: "Which of the following is not a Decision tree algorithm?",

    options: ["ID3","C4.5","DBSCAN","CART"],

    correctAnswer: "DBSCAN"

  },


  {

    question: "Given the entropy for a split, E(split)= 0.39 and the entropy before the split, Ebefore = 1. What is the Information Gain for the split?",

    options: ["1","0.39","0.61","2.56"],

    correctAnswer: "0.61"

  },

  {

    question: "Given entropy of parent = 1, weights averages = (34,14) and entropy of children = (0.9, 0). What is the information gain?",

    options: ["0.675","0.75","0.325","0.1"],

    correctAnswer: "0.325"

  },

  {

    question: "Which of the following is not a Pruning technique?",

    options: ["Cost based pruning","Cost complexity pruning","Cost complexity pruning","Maximum error pruning"],

    correctAnswer: "Maximum error pruning"

  },


  {

    question: "Which of the following statements is not an advantage of Reduced error pruning?",

    options: ["Linear computational complexity","Over pruning","Simplicity","Speed"],

    correctAnswer: "Over pruning"

  },


  {

    question: "Which of the following is not a Post pruning technique?",

    options: ["Reduced error pruning","Error complexity pruning","Minimum error pruning","Chi - square pruning"],

    correctAnswer: "Chi - square pruning"

  },


  {

    question: "Which of the following is not a Post pruning technique?",

    options: ["Pessimistic error pruning","Iterative growing and pruning","Reduced error pruning","Early stopping pruning"],

    correctAnswer: "Early stopping pruning"

  },

  {

    question: " What is the Manhattan distance between a data point (9, 7) and a new query instance (3, 4)?",

    options: ["7","9","3","4"],

    correctAnswer: "9"

  },

  {

    question: "Which of the following statements is not a feature of kNN?",

    options: ["K-NN has assumptions","K-NN is intuitive and simple","No Training Step","It constantly evolves"],

    correctAnswer: "K-NN has assumptions"

  },

  {

    question: "Which of the below is an example of a classification metric?",

    options: ["MAE","RMSE","ROC-AUC","R2"],

    correctAnswer: "ROC-AUC"

  },

  {

    question: "Which of the following is not a supervised machine learning algorithm?",

    options: ["Decision tree","SVM for classification problems","Naïve Bayes","K-means"],

    correctAnswer: "K-means"

  },

  {

    question: "Which one of the following terms is not used in the Bayes Theorem?",

    options: ["Prior","Unlikelihood","Posterior","Evidence"],

    correctAnswer: "Unlikelihood"

  },

  {

    question: "Which one of the following models is a generative model used in machine learning?",

    options: ["Linear Regression","Logistic Regression","Naïve Bayes","Support vector machines"],

    correctAnswer: "Naïve Bayes"

  },


  {

    question: "Identify the parametric machine learning algorithm.",

    options: ["CNN","KNN","Naïve Bayes","SVM"],

    correctAnswer: "Naïve Bayes"

  },

  {

    question: " ________ is the application of machine learning.",

    options: ["Sentimental analysis","Traffic prediction","Speech and face recognition","All of the above"],

    correctAnswer: "All of the above"

  },


  {

    question: "Which one of the following applications is not an example of Naïve Bayes algorithm?",

    options: ["Spam filtering","Text classification","Stock market forecasting","Sentiment analysis"],

    correctAnswer: "Stock market forecasting"
    

  },


  {

    question: "From the following, _______ is not a feature of K-Nearest Neighbors (KNN).",

    options: ["KNN is simple and pretty intuitive","KNN constantly evolves","KNN has assumptions","No Training Step"],

    correctAnswer: "KNN has assumptions"

  },

  {

    question: "Choose the real-world application of ML from the following.",

    options: ["Fraud detection","Chatbots","Digital assistants","All of the above"],

    correctAnswer: "All of the above"

  },

  {

    question: "Which of the following ML algorithms can be used with unlabelled data?",

    options: ["Instance-based algorithms","Regression algorithms","Clustering algorithm","All of the above"],

    correctAnswer: "Clustering algorithm"

  },


  {

    question: " FIND-S algorithm ignores ______.",

    options: ["Negative","Positive","With positive or negative","Neither positive nor negative"],

    correctAnswer: "Negative"

  },


  {

    question: " ________ is an example of stacking.",

    options: ["Voting Classifier","Random Forest","AdaBoost","Bagged Decision Trees"],

    correctAnswer: "Voting Classifier"

  },

  {

    question: " ________ is a clustering algorithm in ML.",

    options: ["CART","Expectation Maximisation","Apriori","Gaussian Naive Bayes"],

    correctAnswer: "Expectation Maximisation"

  },


  {

    question: "Which of the following is the most significant phase in the genetic algorithm?",

    options: ["Fitness function","Selection","Mutation","Crossover"],

    correctAnswer: "Crossover"

  },

  {

    question: "Dimensionality reduction reduces in _______.",

    options: ["Collinearity","Entropy","Stochastics","Performance"],

    correctAnswer: "Collinearity"

  },

  {

    question: "_______ model is a generative model used in ML",

    options: ["Naive Bayes","Linear Regression","Logistic Regression","Support vector machines"],

    correctAnswer: "Naive Bayes"

  },


  {

    question: "ML comprises learning algorithms that",

    options: ["Improve their performance","Over time with experience","At executing some task","All of the above"],

    correctAnswer: "All of the above"

  },


  {

    question: "Which of the following models is trained with data only in a single batch?",

    options: ["Batch learning","Offline learning","Both","None"],

    correctAnswer: "Both"

  },

  {

    question: " ______machine learning algorithm is associated with the idea of bagging?",

    options: ["Decision tree","Classification","Random forest","Regression"],

    correctAnswer: "Random forest"

  },

  {

    question: "Different learning methods do not involve _______.",

    options: ["Analogy","Memorization","Introduction","Deduction"],

    correctAnswer: "Introduction"

  },

  {

    question: "________ is not a supervised ML algorithm.",

    options: ["K-means","SVM for classification problems","Decision Tree","Naive Bayes"],

    correctAnswer: "K-means"

  },


  {

    question: "What do we call an application of machine learning methods to large databases?",

    options: ["Big data computing","Artificial intelligence","Data mining","Internet of Things (IoT)"],

    correctAnswer: "Data mining"

  },

  {

    question: "If the ML model output does not include the target variable, the model is called ______.",

    options: ["Predictive model","Descriptive model","Reinforcement learning","All of the above"],

    correctAnswer: "Descriptive model"

  },


  {

    question: "Choose the options below that do not fall within the category of Machine Learning:",

    options: ["Semi-unsupervised learning","Supervised learning","Reinforcement learning","Unsupervised learning"],

    correctAnswer: "Semi-unsupervised learning"

  },


  {

    question: "Which of the following machine learning algorithm is based upon the idea of bagging?",

    options: ["Decision tree","Random-forest","Classification","Regression"],

    correctAnswer: "Random-forest"

  },


  {

    question: "Which of the below is an example of an unsupervised learning algorithm?",

    options: ["Linear Regression","K-Means Clustering","Decision Trees","Support Vector Machines"],

    correctAnswer: "K-Means Clustering"

  },

  {

    question: "Which evaluation metric is commonly used for classification tasks when class imbalance is present?",

    options: ["Mean Squared Error (MSE)","Accuracy","F1-score","R-squared"],

    correctAnswer: "F1-score"

  },


  {

    question: "Which type of machine learning algorithm aims to mimic the process of human learning?",

    options: ["Supervised learning","Unsupervised learning","Reinforcement learning","Deep learning"],

    correctAnswer: "Reinforcement learning"

  },


  {

    question: "Which algorithm is used for finding frequent itemsets in transactional databases?",

    options: ["Decision Trees","K-Means clustering","Apriori algorithm","SVM"],

    correctAnswer: "Apriori algorithm"

  },


  {

    question: "Which algorithm is used for hierarchical clustering?",

    options: ["K-Means clustering","Agglomerative clustering","DBSCAN","PCA"],

    correctAnswer: "Agglomerative clustering"

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