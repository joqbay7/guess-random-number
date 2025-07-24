# 🎲 Guess Random Number Game

A modern, responsive number guessing game built with vanilla HTML, CSS, and JavaScript. Features a beautiful glassmorphism design and intuitive user experience.

![Game Preview](./images/preview.png)

## 🎯 Features

- **Modern UI Design**: Glassmorphism effects with gradient backgrounds
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smart Game Logic**: Proximity hints and directional guidance
- **Keyboard Support**: Enter to submit, R to reset, Escape to clear
- **Dynamic UX**: Elements appear/hide based on game state
- **Accessibility**: Reduced motion support and proper contrast
- **Multilingual**: English interface with Portuguese comments

## 🎮 How to Play

1. **Start**: The game generates a random number between 1-100
2. **Guess**: Enter your guess and press Enter or click Submit
3. **Hints**: Get directional (higher/lower) and proximity hints
4. **Win**: Guess correctly within 10 attempts to win!
5. **Reset**: Click Reset Game or press 'R' to start over

## 🔥 Game Features

### Proximity Hints
- 🔥 **Very close** (within 5 numbers)
- 🔶 **Close** (within 10 numbers)  
- 🔵 **Getting warmer** (within 20 numbers)
- ❄️ **Cold** (more than 20 numbers away)

### Keyboard Shortcuts
- `Enter` - Submit your guess
- `R` - Reset game (when finished)
- `Escape` - Clear input field

## 🛠️ Technical Stack

- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Modern features including:
  - CSS Grid & Flexbox
  - Custom properties (CSS variables)
  - Glassmorphism effects
  - Smooth animations & transitions
  - Media queries for responsiveness
- **JavaScript ES6+**: Clean, modular code with:
  - Event-driven architecture
  - Input validation
  - State management
  - Dynamic DOM manipulation

## 📁 Project Structure

```
guess-random-number/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with animations
├── app.js              # Game logic and interactions
├── images/             # Visual assets
│   ├── bg.png         # Background image
│   ├── robot.png      # Robot icon
│   ├── code.png       # Decorative code image
│   ├── trophy.png     # Success icon
│   └── Ruido.png      # Texture overlay
└── README.md          # Project documentation
```

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

- Design inspired by modern glassmorphism trends
- Icons and images used for educational purposes
- Built with accessibility and performance in mind

## 📈 Future Enhancements

- [ ] Difficulty levels (Easy/Medium/Hard)
- [ ] Score tracking and leaderboard
- [ ] Sound effects and music
- [ ] Multiplayer mode
- [ ] Custom number ranges
- [ ] Achievement system
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) features

---

Made with ❤️ and vanilla JavaScript
