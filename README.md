# Kids Quiz Game PWA

A fun and educational quiz game designed for kids aged 10-12 years old. This Progressive Web App (PWA) can be installed on mobile devices and works offline.

## Features

### 🎯 Quiz Game
- **Age-appropriate questions** for kids 10-12 years old
- **Multiple choice format** with 4 options per question
- **10 questions per quiz** randomly selected from the question bank
- **Real-time scoring** and progress tracking
- **Instant feedback** showing correct/incorrect answers

### 📚 Question Categories
- **USA**: Geography, history, and facts about the United States
- **Geography**: Continents, oceans, and world geography
- **Science**: Basic science facts, animals, and nature
- **Math**: Simple arithmetic, percentages, and basic math concepts
- **Logos**: Popular brand logos and company recognition

### 🏆 Features
- **High Scores**: Track your best performances
- **Add Questions**: Built-in admin panel to add new questions
- **Mobile-Friendly**: Responsive design optimized for mobile devices
- **PWA Support**: Install as an app on your phone/tablet
- **Offline Mode**: Play even without internet connection
- **Local Storage**: All data saved locally on your device

## Installation

### As a Web App
1. Open the game in your mobile browser
2. Look for the "Install" banner at the top
3. Tap "Install" to add it to your home screen
4. Launch from your home screen like any other app

### For Development
1. Clone or download the project files
2. Start a local server:
   ```bash
   cd kids-quiz-pwa
   python3 -m http.server 8080
   ```
3. Open `http://localhost:8080` in your browser

## How to Play

1. **Start Quiz**: Tap "Start Quiz" from the home screen
2. **Answer Questions**: Read each question and tap your answer
3. **Get Feedback**: See if you're right or wrong immediately
4. **Continue**: Tap "Next Question" to proceed
5. **View Results**: See your final score and encouraging message
6. **Play Again**: Start a new quiz or return to the home screen

## Adding New Questions

1. Tap "Add Questions" from the home screen
2. Fill in all the required fields:
   - **Question**: Write your question clearly
   - **Category**: Choose from USA, Geography, Science, Math, or Logos
   - **Options**: Provide 4 multiple choice answers
   - **Correct Answer**: Select which option is correct (1-4)
3. Tap "Add Question" to save
4. Your new question will be included in future quizzes

## Sample Questions

The game comes with 17+ pre-loaded questions covering:

### USA Questions
- Capital of the United States
- Number of states
- Presidents on currency

### Geography Questions
- Number of continents
- Largest and smallest oceans
- Continental facts

### Science Questions
- Human body facts
- Animal characteristics
- Basic biology

### Math Questions
- Multiplication and division
- Percentages
- Square roots

### Logo Questions
- Popular brand recognition
- Company logos

## Technical Features

### Progressive Web App (PWA)
- **Installable**: Add to home screen on mobile devices
- **Offline Support**: Service worker caches content for offline play
- **Responsive Design**: Works on phones, tablets, and desktops
- **Fast Loading**: Cached resources load instantly

### Data Storage
- **Local Storage**: Questions and scores saved in browser
- **No Server Required**: Everything runs locally
- **Privacy Friendly**: No data sent to external servers

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **PWA Support**: Full installation support on supported devices

## File Structure

```
kids-quiz-pwa/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Game logic and functionality
├── manifest.json       # PWA manifest for installation
├── sw.js              # Service worker for offline support
├── README.md          # This documentation
└── icons/             # App icons (to be generated)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

## Customization

### Adding More Categories
1. Edit the category dropdown in `index.html`
2. Update the question form validation in `script.js`
3. Add new sample questions with the new category

### Changing Quiz Length
Modify the `startQuiz()` function in `script.js` to change from 10 questions:
```javascript
quizQuestions = shuffleArray([...questions]).slice(0, 15); // Change to 15 questions
```

### Styling Changes
Edit `style.css` to customize:
- Colors and themes
- Font sizes
- Button styles
- Layout and spacing

## Educational Value

This quiz game helps kids learn about:
- **Geography**: World knowledge and spatial awareness
- **Science**: Basic scientific concepts and facts
- **Mathematics**: Practical math skills and problem solving
- **Cultural Awareness**: USA history and general knowledge
- **Brand Recognition**: Visual recognition and memory skills

## Future Enhancements

Potential features to add:
- **Difficulty Levels**: Easy, Medium, Hard questions
- **Timer Mode**: Time-limited questions for extra challenge
- **Multiplayer**: Local multiplayer support
- **Sound Effects**: Audio feedback for correct/incorrect answers
- **Animations**: More engaging visual feedback
- **Question Import**: Import questions from CSV files
- **Statistics**: Detailed performance analytics

## Support

This is a standalone PWA that runs entirely in your browser. No internet connection is required after the initial load. All data is stored locally on your device.

For the best experience:
- Use a modern mobile browser
- Install as a PWA for full-screen experience
- Ensure JavaScript is enabled
- Allow local storage for saving progress

## License

This project is open source and free to use for educational purposes.