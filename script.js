// Quiz Game State
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedAnswer = null;
let quizQuestions = [];
let currentLevel = 'medium';

// Easy questions for kids aged 6-8
const easyQuestions = [
    // Colors and Basic Facts
    {
        question: "What color do you get when you mix red and yellow?",
        options: ["Purple", "Orange", "Green", "Blue"],
        correct: 1,
        category: "colors",
        level: "easy"
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "4"],
        correct: 1,
        category: "animals",
        level: "easy"
    },
    {
        question: "What sound does a cow make?",
        options: ["Woof", "Meow", "Moo", "Oink"],
        correct: 2,
        category: "animals",
        level: "easy"
    },
    {
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "basic",
        level: "easy"
    },
    {
        question: "What do bees make?",
        options: ["Milk", "Honey", "Butter", "Cheese"],
        correct: 1,
        category: "animals",
        level: "easy"
    },
    {
        question: "What color is the sun?",
        options: ["Blue", "Green", "Yellow", "Red"],
        correct: 2,
        category: "colors",
        level: "easy"
    },
    {
        question: "How many wheels does a bicycle have?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        category: "basic",
        level: "easy"
    },
    {
        question: "What do you use to brush your teeth?",
        options: ["Fork", "Spoon", "Toothbrush", "Comb"],
        correct: 2,
        category: "basic",
        level: "easy"
    },
    {
        question: "Which animal says 'meow'?",
        options: ["Dog", "Cat", "Bird", "Fish"],
        correct: 1,
        category: "animals",
        level: "easy"
    },
    {
        question: "What shape has three sides?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correct: 2,
        category: "shapes",
        level: "easy"
    },
    {
        question: "What do you wear on your feet?",
        options: ["Hat", "Gloves", "Shoes", "Scarf"],
        correct: 2,
        category: "basic",
        level: "easy"
    },
    {
        question: "How many fingers do you have on one hand?",
        options: ["4", "5", "6", "3"],
        correct: 1,
        category: "body",
        level: "easy"
    }
];

// Medium questions for kids aged 9-12 (current questions)
const mediumQuestions = [
    // USA Questions
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
        correct: 1,
        category: "usa",
        level: "medium"
    },
    {
        question: "How many states are there in the USA?",
        options: ["48", "49", "50", "51"],
        correct: 2,
        category: "usa",
        level: "medium"
    },
    {
        question: "Which president is on the $1 bill?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Benjamin Franklin"],
        correct: 1,
        category: "usa",
        level: "medium"
    },
    
    // Geography Questions
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "geography",
        level: "medium"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        category: "geography",
        level: "medium"
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Australia"],
        correct: 1,
        category: "geography",
        level: "medium"
    },
    {
        question: "What is the smallest ocean?",
        options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correct: 0,
        category: "geography",
        level: "medium"
    },
    
    // Science Questions
    {
        question: "How many bones are there in an adult human body?",
        options: ["196", "206", "216", "226"],
        correct: 1,
        category: "science",
        level: "medium"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        category: "science",
        level: "medium"
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        category: "science",
        level: "medium"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Horse", "Gazelle"],
        correct: 1,
        category: "science",
        level: "medium"
    },
    
    // Math Questions
    {
        question: "What is 15 × 8?",
        options: ["110", "120", "130", "140"],
        correct: 1,
        category: "math",
        level: "medium"
    },
    {
        question: "What is 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        category: "math",
        level: "medium"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        category: "math",
        level: "medium"
    },
    {
        question: "What is 25% of 200?",
        options: ["40", "45", "50", "55"],
        correct: 2,
        category: "math",
        level: "medium"
    },
    
    // Logo Questions
    {
        question: "Which company has a bitten apple as its logo?",
        options: ["Microsoft", "Google", "Apple", "Samsung"],
        correct: 2,
        category: "logos",
        level: "medium"
    },
    {
        question: "What color is the McDonald's 'M'?",
        options: ["Red", "Blue", "Yellow", "Green"],
        correct: 2,
        category: "logos",
        level: "medium"
    },
    {
        question: "Which company's logo is a swoosh?",
        options: ["Adidas", "Nike", "Puma", "Reebok"],
        correct: 1,
        category: "logos",
        level: "medium"
    }
];

// Hard questions for kids aged 13+
const hardQuestions = [
    // Advanced Science
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
        category: "science",
        level: "hard"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
        category: "science",
        level: "hard"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "186,000 miles/s", "All of the above"],
        correct: 3,
        category: "science",
        level: "hard"
    },
    
    // Advanced Geography
    {
        question: "What is the capital of Kazakhstan?",
        options: ["Almaty", "Nur-Sultan", "Shymkent", "Aktobe"],
        correct: 1,
        category: "geography",
        level: "hard"
    },
    {
        question: "Which river flows through the most countries?",
        options: ["Nile", "Amazon", "Danube", "Rhine"],
        correct: 2,
        category: "geography",
        level: "hard"
    },
    {
        question: "What is the deepest point on Earth?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"],
        correct: 0,
        category: "geography",
        level: "hard"
    },
    
    // Advanced Math
    {
        question: "What is the value of π (pi) to 3 decimal places?",
        options: ["3.141", "3.142", "3.143", "3.144"],
        correct: 1,
        category: "math",
        level: "hard"
    },
    {
        question: "What is 2^10 (2 to the power of 10)?",
        options: ["512", "1024", "2048", "4096"],
        correct: 1,
        category: "math",
        level: "hard"
    },
    {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2x²"],
        correct: 1,
        category: "math",
        level: "hard"
    },
    
    // Advanced History
    {
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1,
        category: "history",
        level: "hard"
    },
    {
        question: "Who wrote 'The Origin of Species'?",
        options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo Galilei"],
        correct: 2,
        category: "history",
        level: "hard"
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
        correct: 1,
        category: "history",
        level: "hard"
    },
    
    // Advanced Literature
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1,
        category: "literature",
        level: "hard"
    },
    {
        question: "What is the first book in the Harry Potter series?",
        options: ["Chamber of Secrets", "Prisoner of Azkaban", "Philosopher's Stone", "Goblet of Fire"],
        correct: 2,
        category: "literature",
        level: "hard"
    }
];

// Combined default questions
const defaultQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];

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

// Show level selection screen
function showLevelSelection() {
    showScreen('level-screen');
}

// Start Quiz with level
function startQuiz(level = 'medium') {
    currentLevel = level;
    
    // Filter questions by level
    let levelQuestions = [];
    switch(level) {
        case 'easy':
            levelQuestions = easyQuestions;
            break;
        case 'medium':
            levelQuestions = mediumQuestions;
            break;
        case 'hard':
            levelQuestions = hardQuestions;
            break;
        default:
            levelQuestions = mediumQuestions;
    }
    
    // Add any custom questions of the same level
    const customQuestions = questions.filter(q => q.level === level);
    levelQuestions = [...levelQuestions, ...customQuestions];
    
    if (levelQuestions.length < 5) {
        alert(`Need at least 5 ${level} questions to start the quiz!`);
        return;
    }
    
    // Select 10 random questions from the level
    quizQuestions = shuffleArray([...levelQuestions]).slice(0, Math.min(10, levelQuestions.length));
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
    const level = document.getElementById('level').value;
    const option1 = document.getElementById('option1').value.trim();
    const option2 = document.getElementById('option2').value.trim();
    const option3 = document.getElementById('option3').value.trim();
    const option4 = document.getElementById('option4').value.trim();
    const correctAnswer = parseInt(document.getElementById('correct-answer').value);
    
    // Validation
    if (!questionText || !category || !level || !option1 || !option2 || !option3 || !option4 || isNaN(correctAnswer)) {
        showMessage('Please fill in all fields!', 'error');
        return;
    }
    
    // Create new question
    const newQuestion = {
        question: questionText,
        options: [option1, option2, option3, option4],
        correct: correctAnswer,
        category: category,
        level: level
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