// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value) {
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
        } else if (button.id === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
        } else if (button.id === 'equals') {
            if (previousInput !== '' && currentInput !== '' && operator !== '') {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                previousInput = '';
                operator = '';
            }
        }
        
        display.innerText = currentInput;
    });
});
