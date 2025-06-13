// Quiz Game State
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedAnswer = null;
let quizQuestions = [];

// Sample questions for kids aged 10-12
const defaultQuestions = [
    // USA Questions
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
        correct: 1,
        category: "usa"
    },
    {
        question: "How many states are there in the USA?",
        options: ["48", "49", "50", "51"],
        correct: 2,
        category: "usa"
    },
    {
        question: "Which president is on the $1 bill?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
        correct: 1,
        category: "usa"
    },
    
    // Geography Questions
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "geography"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        category: "geography"
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Australia"],
        correct: 1,
        category: "geography"
    },
    {
        question: "What is the smallest ocean?",
        options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correct: 0,
        category: "geography"
    },
    
    // Science Questions
    {
        question: "How many bones are there in an adult human body?",
        options: ["196", "206", "216", "226"],
        correct: 1,
        category: "science"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        category: "science"
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        category: "science"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Horse", "Gazelle"],
        correct: 1,
        category: "science"
    },
    
    // Math Questions
    {
        question: "What is 15 × 8?",
        options: ["110", "120", "130", "140"],
        correct: 1,
        category: "math"
    },
    {
        question: "What is 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        category: "math"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        category: "math"
    },
    {
        question: "What is 25% of 200?",
        options: ["40", "45", "50", "55"],
        correct: 2,
        category: "math"
    },
    
    // Logo Questions
    {
        question: "Which company has a bitten apple as its logo?",
        options: ["Microsoft", "Google", "Apple", "Samsung"],
        correct: 2,
        category: "logos"
    },
    {
        question: "What color is the McDonald's 'M'?",
        options: ["Red", "Blue", "Yellow", "Green"],
        correct: 2,
        category: "logos"
    },
    {
        question: "Which company's logo is a swoosh?",
        options: ["Adidas", "Nike", "Puma", "Reebok"],
        correct: 1,
        category: "logos"
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    registerServiceWorker();
});

// Load questions from localStorage or use defaults
function loadQuestions() {
    const savedQuestions = localStorage.getItem('quizQuestions');
    if (savedQuestions) {
        questions = JSON.parse(savedQuestions);
    } else {
        questions = [...defaultQuestions];
        saveQuestions();
    }
}

// Save questions to localStorage
function saveQuestions() {
    localStorage.setItem('quizQuestions', JSON.stringify(questions));
}

// Start Quiz
function startQuiz() {
    if (questions.length < 5) {
        alert('Need at least 5 questions to start the quiz!');
        return;
    }
    
    // Select 10 random questions
    quizQuestions = shuffleArray([...questions]).slice(0, Math.min(10, questions.length));
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    showScreen('quiz-screen');
    displayQuestion();
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Display current question
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionCounter = document.getElementById('question-counter');
    const scoreElement = document.getElementById('score');
    const progress = document.getElementById('progress');
    const nextBtn = document.getElementById('next-btn');
    
    // Update question counter and score
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    scoreElement.textContent = `Score: ${score}`;
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progress.style.width = progressPercent + '%';
    
    // Display question
    questionText.textContent = question.question;
    
    // Clear and create options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide next button
    nextBtn.style.display = 'none';
    selectedAnswer = null;
}

// Select answer
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = answerIndex;
    const options = document.querySelectorAll('.option');
    const question = quizQuestions[currentQuestionIndex];
    
    // Disable all options
    options.forEach(option => option.classList.add('disabled'));
    
    // Show correct/incorrect
    options[answerIndex].classList.add('selected');
    options[question.correct].classList.add('correct');
    
    if (answerIndex !== question.correct) {
        options[answerIndex].classList.add('incorrect');
    } else {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    }
    
    // Show next button
    document.getElementById('next-btn').style.display = 'block';
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    const finalScore = document.getElementById('final-score');
    const scoreMessage = document.getElementById('score-message');
    
    finalScore.textContent = `Your Score: ${score}/${quizQuestions.length}`;
    
    // Score messages
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 90) {
        scoreMessage.textContent = "🌟 Excellent! You're a quiz champion!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "👏 Great job! You know your stuff!";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "👍 Good work! Keep learning!";
    } else {
        scoreMessage.textContent = "📚 Keep studying and try again!";
    }
    
    // Save high score
    saveHighScore(score, quizQuestions.length);
    
    showScreen('results-screen');
}

// Save high score
function saveHighScore(score, total) {
    const scores = getHighScores();
    const newScore = {
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toLocaleDateString()
    };
    
    scores.push(newScore);
    scores.sort((a, b) => b.percentage - a.percentage);
    scores.splice(10); // Keep only top 10
    
    localStorage.setItem('highScores', JSON.stringify(scores));
}

// Get high scores
function getHighScores() {
    const scores = localStorage.getItem('highScores');
    return scores ? JSON.parse(scores) : [];
}

// Show high scores
function showScores() {
    const scoresList = document.getElementById('scores-list');
    const scores = getHighScores();
    
    if (scores.length === 0) {
        scoresList.innerHTML = '<p style="text-align: center; color: #666;">No scores yet! Play a quiz to set your first score.</p>';
    } else {
        scoresList.innerHTML = scores.map((score, index) => `
            <div class="score-item">
                <span class="score-rank">#${index + 1}</span>
                <span>${score.score}/${score.total} (${score.percentage}%)</span>
                <span>${score.date}</span>
            </div>
        `).join('');
    }
    
    showScreen('scores-screen');
}

// Show admin screen
function showAdmin() {
    showScreen('admin-screen');
}

// Handle question form submission
document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const questionText = document.getElementById('new-question').value.trim();
    const category = document.getElementById('category').value;
    const option1 = document.getElementById('option1').value.trim();
    const option2 = document.getElementById('option2').value.trim();
    const option3 = document.getElementById('option3').value.trim();
    const option4 = document.getElementById('option4').value.trim();
    const correctAnswer = parseInt(document.getElementById('correct-answer').value);
    
    // Validation
    if (!questionText || !category || !option1 || !option2 || !option3 || !option4 || isNaN(correctAnswer)) {
        showMessage('Please fill in all fields!', 'error');
        return;
    }
    
    // Create new question
    const newQuestion = {
        question: questionText,
        options: [option1, option2, option3, option4],
        correct: correctAnswer,
        category: category
    };
    
    // Add to questions array
    questions.push(newQuestion);
    saveQuestions();
    
    // Show success message
    showMessage('Question added successfully!', 'success');
    
    // Reset form
    document.getElementById('question-form').reset();
});

// Show message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = message;
    
    // Insert at top of form
    const form = document.getElementById('question-form');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Show screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
}

// Go home
function goHome() {
    showScreen('home-screen');
}

// Register Service Worker for PWA
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    }
}

// Install prompt for PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or banner
    const installBanner = document.createElement('div');
    installBanner.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; background: #4CAF50; color: white; padding: 10px; text-align: center; z-index: 1000;">
            <span>Install this app for the best experience!</span>
            <button onclick="installApp()" style="margin-left: 10px; background: white; color: #4CAF50; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Install</button>
            <button onclick="this.parentElement.parentElement.remove()" style="margin-left: 5px; background: transparent; color: white; border: 1px solid white; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Later</button>
        </div>
    `;
    document.body.appendChild(installBanner);
});

// Install app function
function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Handle app installed
window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed');
    // Remove install banner if it exists
    const banner = document.querySelector('[style*="position: fixed"]');
    if (banner) banner.remove();
});