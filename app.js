/**
 * Guess the Random Number Game
 * Jogo de adivinhar número aleatório
 */

// Game state variables / Variáveis de estado do jogo
let randomNumber = 0; // Número aleatório gerado
let attemptCount = 0; // Contador de tentativas
let maxAttempts = 10; // Máximo de tentativas permitidas
let gameActive = false; // Estado do jogo ativo

// DOM elements / Elementos do DOM
const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

/**
 * Initialize the game / Inicializar o jogo
 */
function initializeGame() {
    randomNumber = generateRandomNumber(1, 100);
    attemptCount = 0;
    gameActive = true;
    
    // Hide elements initially / Ocultar elementos inicialmente
    hideElement(resultDiv);
    hideElement(resetButton);
    
    // Clear input and focus / Limpar input e focar
    guessInput.value = '';
    guessInput.focus();
    
    console.log('Game initialized. Random number:', randomNumber); // Para debug
}

/**
 * Generate random number between min and max (inclusive)
 * Gerar número aleatório entre min e max (inclusivo)
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Show element with animation / Mostrar elemento com animação
 */
function showElement(element) {
    element.style.display = 'flex';
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    // Force reflow / Forçar reflow
    element.offsetHeight;
    
    element.style.transition = 'all 0.3s ease';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

/**
 * Hide element / Ocultar elemento
 */
function hideElement(element) {
    element.style.display = 'none';
}

/**
 * Process user guess / Processar palpite do usuário
 */
function processGuess(userGuess) {
    if (!gameActive) return;
    
    attemptCount++;
    
    // Show result and reset button after first guess
    // Mostrar resultado e botão reset após primeiro palpite
    if (attemptCount === 1) {
        showElement(resultDiv);
        showElement(resetButton);
    }
    
    const difference = Math.abs(userGuess - randomNumber);
    const attemptsLeft = maxAttempts - attemptCount;
    
    // Check if guess is correct / Verificar se o palpite está correto
    if (userGuess === randomNumber) {
        handleCorrectGuess();
    } else if (attemptCount >= maxAttempts) {
        handleGameOver();
    } else {
        handleIncorrectGuess(userGuess, difference, attemptsLeft);
    }
}

/**
 * Handle correct guess / Lidar com palpite correto
 */
function handleCorrectGuess() {
    gameActive = false;
    const message = `🎉 Congratulations! You guessed it right in ${attemptCount} attempt${attemptCount > 1 ? 's' : ''}!`;
    const messageTranslation = `🎉 Parabéns! Você acertou em ${attemptCount} tentativa${attemptCount > 1 ? 's' : ''}!`;
    
    displayResult(message, 'success');
    guessInput.disabled = true;
    
    console.log(messageTranslation);
}

/**
 * Handle game over / Lidar com fim de jogo
 */
function handleGameOver() {
    gameActive = false;
    const message = `💔 Game Over! The number was ${randomNumber}. Better luck next time!`;
    const messageTranslation = `💔 Fim de jogo! O número era ${randomNumber}. Mais sorte na próxima!`;
    
    displayResult(message, 'error');
    guessInput.disabled = true;
    
    console.log(messageTranslation);
}

/**
 * Handle incorrect guess / Lidar com palpite incorreto
 */
function handleIncorrectGuess(userGuess, difference, attemptsLeft) {
    let message = '';
    let hint = '';
    
    // Provide directional hint / Fornecer dica direcional
    if (userGuess < randomNumber) {
        hint = 'Try a higher number! 📈';
    } else {
        hint = 'Try a lower number! 📉';
    }
    
    // Provide proximity hint / Fornecer dica de proximidade
    let proximityHint = '';
    if (difference <= 5) {
        proximityHint = '🔥 Very close!';
    } else if (difference <= 10) {
        proximityHint = '🔶 Close!';
    } else if (difference <= 20) {
        proximityHint = '🔵 Getting warmer!';
    } else {
        proximityHint = '❄️ Cold!';
    }
    
    message = `${hint} ${proximityHint} (${attemptsLeft} attempts left)`;
    
    displayResult(message, 'hint');
}

/**
 * Display result message / Exibir mensagem de resultado
 */
function displayResult(message, type) {
    resultDiv.textContent = message;
    resultDiv.className = type;
    
    // Add shake animation for incorrect guesses
    // Adicionar animação de tremor para palpites incorretos
    if (type === 'hint') {
        resultDiv.style.animation = 'shake 0.5s ease-out';
        setTimeout(() => {
            resultDiv.style.animation = '';
        }, 500);
    }
}

/**
 * Reset game / Reiniciar jogo
 */
function resetGame() {
    // Re-enable input / Reabilitar input
    guessInput.disabled = false;
    
    // Hide elements again / Ocultar elementos novamente
    hideElement(resultDiv);
    hideElement(resetButton);
    
    // Initialize new game / Inicializar novo jogo
    initializeGame();
    
    console.log('Game reset / Jogo reiniciado');
}

/**
 * Validate user input / Validar entrada do usuário
 */
function validateInput(value) {
    const number = parseInt(value);
    
    if (isNaN(number)) {
        displayResult('❌ Please enter a valid number! / Por favor, digite um número válido!', 'error');
        return null;
    }
    
    if (number < 1 || number > 100) {
        displayResult('❌ Number must be between 1 and 100! / O número deve estar entre 1 e 100!', 'error');
        return null;
    }
    
    return number;
}

/**
 * Handle form submission / Lidar com envio do formulário
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const userInput = guessInput.value.trim();
    const userGuess = validateInput(userInput);
    
    if (userGuess !== null && gameActive) {
        processGuess(userGuess);
        guessInput.value = '';
        guessInput.focus();
    }
}

// Event listeners / Ouvintes de eventos
guessForm.addEventListener('submit', handleFormSubmit);
resetButton.addEventListener('click', resetGame);

// Input validation on keypress / Validação de entrada ao pressionar tecla
guessInput.addEventListener('keypress', function(event) {
    // Submit on Enter key / Enviar com tecla Enter
    if (event.key === 'Enter') {
        event.preventDefault();
        handleFormSubmit(event);
        return;
    }
    
    // Allow only numbers / Permitir apenas números
    const char = String.fromCharCode(event.which);
    if (!/[0-9]/.test(char)) {
        event.preventDefault();
    }
});

// Initialize game when page loads / Inicializar jogo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    console.log('Guess the Random Number Game loaded! / Jogo Adivinhe o Número Aleatório carregado!');
});

/**
 * Additional utility functions / Funções utilitárias adicionais
 */

// Add keyboard shortcuts / Adicionar atalhos do teclado
document.addEventListener('keydown', function(event) {
    // Press 'R' to reset game / Pressionar 'R' para reiniciar jogo
    if (event.key.toLowerCase() === 'r' && !gameActive) {
        resetGame();
    }
    
    // Press 'Escape' to clear input / Pressionar 'Escape' para limpar input
    if (event.key === 'Escape') {
        guessInput.value = '';
        guessInput.focus();
    }
});

// Add some game statistics / Adicionar algumas estatísticas do jogo
function getGameStats() {
    return {
        currentNumber: randomNumber,
        attempts: attemptCount,
        maxAttempts: maxAttempts,
        gameActive: gameActive
    };
}

// Make stats available globally for debugging / Tornar estatísticas disponíveis globalmente para debug
window.gameStats = getGameStats;