# 🎲 Guess Random Number Game - Logic Programming Project

A number guessing game focused on **programming logic fundamentals**, developed as part of the **ONE - Oracle Next Education** program in partnership with **Alura**. This project demonstrates core programming concepts including conditional logic, loops, input validation, and state management using vanilla JavaScript.

![Game Preview](./images/preview.png)

## 🎯 Educational Objectives

This project was created to practice and demonstrate:

- **Conditional Logic**: if/else statements for game flow control
- **Loop Concepts**: Game state management and attempt counting
- **Input Validation**: Data sanitization and error handling
- **Function Organization**: Modular code structure and separation of concerns
- **Algorithm Design**: Number comparison and proximity calculation logic
- **User Experience**: Dynamic interface updates based on program state
- **Clean Code Principles**: Readable, maintainable, and well-documented code

## 🧠 Programming Logic Concepts Applied

### Core Logic Structures
- **Decision Making**: Implementing game rules with conditional statements
- **Data Validation**: Ensuring user input meets game requirements
- **State Management**: Tracking game progress and user attempts
- **Algorithm Efficiency**: Optimized number comparison and hint generation

### Problem-Solving Approach
1. **Problem Analysis**: Break down game requirements into logical components
2. **Algorithm Design**: Create step-by-step solution for number guessing logic
3. **Implementation**: Transform logic into working JavaScript code
4. **Testing & Debugging**: Validate functionality and edge cases
5. **Code Optimization**: Refactor for better readability and performance

## 🎮 Game Logic Flow

```
START → Generate Random Number (1-100)
  ↓
User Input → Validate Input (1-100, Number)
  ↓
Compare with Target → Calculate Difference
  ↓
Generate Hints → Update Attempt Counter
  ↓
Check Win/Loss Conditions → Update Game State
  ↓
Display Result → Continue or End Game
```

## 🎯 Features

### Programming Logic Features
- **Smart Validation Logic**: Input sanitization with comprehensive error handling
- **Proximity Algorithm**: Mathematical distance calculation for intelligent hints
- **State Management**: Clean separation between game states and UI updates
- **Conditional Flow**: Complex decision trees for different game outcomes
- **Event-Driven Architecture**: Responsive user interaction handling

### User Experience Features
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern UI**: Glassmorphism effects with gradient backgrounds
- **Keyboard Support**: Enter to submit, R to reset, Escape to clear
- **Dynamic Interface**: Elements appear/hide based on logical conditions
- **Accessibility**: Reduced motion support and proper contrast ratios

## 🎮 How to Play

1. **Start**: The game generates a random number between 1-100
2. **Guess**: Enter your guess and press Enter or click Submit
3. **Hints**: Get directional (higher/lower) and proximity hints
4. **Win**: Guess correctly within 10 attempts to win!
5. **Reset**: Click Reset Game or press 'R' to start over

## 🔥 Logic Programming Highlights

### Algorithm Implementation
```javascript
// Proximity calculation algorithm
const difference = Math.abs(userGuess - randomNumber);

// Conditional logic for hints
if (difference <= 5) {
    proximityHint = '🔥 Very close!';
} else if (difference <= 10) {
    proximityHint = '🔶 Close!';
} else if (difference <= 20) {
    proximityHint = '🔵 Getting warmer!';
} else {
    proximityHint = '❄️ Cold!';
}
```

### Input Validation Logic
```javascript
function validateInput(value) {
    const number = parseInt(value);
    
    // Check if input is a valid number
    if (isNaN(number)) {
        displayResult('❌ Please enter a valid number!', 'error');
        return null;
    }
    
    // Check if number is within valid range
    if (number < 1 || number > 100) {
        displayResult('❌ Number must be between 1 and 100!', 'error');
        return null;
    }
    
    return number;
}
```

### Game State Management
- **Boolean Logic**: `gameActive` flag controls game flow
- **Counter Logic**: `attemptCount` tracks user progress
- **Conditional Rendering**: UI elements appear based on logical conditions
- **Event Handling**: Keyboard and form interactions with proper validation

## 🎓 ONE - Oracle Next Education

This project is part of my learning journey in the **Oracle Next Education** program, a comprehensive tech education initiative in partnership with **Alura**. The focus is on developing strong programming logic foundations through practical projects.

### Learning Outcomes
- ✅ **Conditional Statements**: Mastering if/else logic for game control
- ✅ **Function Design**: Creating reusable, single-purpose functions
- ✅ **Input Validation**: Implementing robust data validation techniques
- ✅ **Algorithm Thinking**: Breaking complex problems into logical steps
- ✅ **Code Organization**: Structuring code for readability and maintenance
- ✅ **Error Handling**: Anticipating and managing edge cases
- ✅ **State Management**: Controlling application flow and data persistence

### Skills Demonstrated
- **Problem Decomposition**: Breaking the game into manageable logical components
- **Pseudocode to Code**: Translating algorithmic thinking into working JavaScript
- **Testing Mindset**: Considering various input scenarios and edge cases
- **Clean Code Practices**: Writing self-documenting code with clear variable names
- **User Experience Logic**: Connecting programming logic to user interface updates

## �️ Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure and form handling
- **CSS3**: Modern styling with responsive design principles
- **JavaScript ES6+**: Logic implementation focusing on:
  - **Function-based architecture**
  - **Event-driven programming**
  - **Data validation and sanitization**
  - **Conditional logic and flow control**
  - **Mathematical operations and comparisons**
  - **DOM manipulation and state updates**

### Programming Concepts Applied
- **Variables and Data Types**: Number handling and string manipulation
- **Functions**: Modular code organization with clear responsibilities
- **Conditionals**: Complex if/else chains for game logic
- **Loops Concepts**: Iteration through game attempts and validation
- **Event Handling**: User interaction management
- **Scope Management**: Proper variable scoping and state isolation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guess-random-number.git
   ```

2. Navigate to the project directory:
   ```bash
   cd guess-random-number
   ```

3. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click index.html -> "Open with Live Server"
   ```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main theme color */
    --secondary-color: #8b5cf6;  /* Secondary theme color */
    --accent-color: #f59e0b;     /* Accent color */
    /* ... more colors */
}
```

### Game Settings
Modify game parameters in `app.js`:
```javascript
let maxAttempts = 10;  // Maximum attempts allowed
// Change generateRandomNumber(1, 100) for different ranges
```

## 🔧 Development

### Code Style
- **Variables**: camelCase with descriptive names
- **Functions**: Verb-noun pattern with JSDoc comments
- **Comments**: Bilingual (English/Portuguese)
- **Commits**: Conventional Commits standard

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below  
- **Desktop**: 769px and above

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/new-feature`
3. Commit changes: `git commit -m 'feat: add new feature'`
4. Push to branch: `git push origin feat/new-feature`
5. Submit a pull request

### Commit Convention
This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Oracle Next Education (ONE)**: For providing comprehensive programming education
- **Alura**: For the structured learning path and practical project guidance
- **Programming Logic Focus**: This project prioritizes algorithmic thinking over visual design
- **Educational Purpose**: Built to demonstrate core programming concepts and logical reasoning
- **Community Learning**: Part of a collaborative learning journey with fellow ONE students

## 📈 Future Logic Programming Enhancements

- [ ] **Advanced Algorithms**: Implement binary search for hint optimization
- [ ] **Data Structures**: Add attempt history with array manipulation
- [ ] **Pattern Recognition**: Smart hint system based on user behavior analysis
- [ ] **Mathematical Logic**: Probability calculations for optimal hint generation
- [ ] **Recursive Functions**: Advanced game state management
- [ ] **Object-Oriented Approach**: Refactor using class-based architecture
- [ ] **Error Handling Patterns**: Comprehensive exception management
- [ ] **Performance Optimization**: Algorithm efficiency improvements

## 🎯 Learning Objectives Achieved

This project successfully demonstrates fundamental programming logic concepts essential for any developer:

✅ **Problem-solving methodology**  
✅ **Algorithmic thinking**  
✅ **Input validation techniques**  
✅ **Conditional logic mastery**  
✅ **Function design principles**  
✅ **Code organization strategies**  
✅ **Debugging and testing approaches**

---

**Developed as part of ONE - Oracle Next Education program**  
*Focused on programming logic and algorithmic thinking* 🧠💻
