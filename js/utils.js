// Utility functions for puzzle validation and navigation

function showClue(clueText) {
    const clueElement = document.querySelector('.clue-text');
    if (clueElement) {
        clueElement.textContent = clueText;
        clueElement.style.display = 'block';
    }
}

function enableNextButton() {
    const nextButton = document.querySelector('.next-button');
    if (nextButton) {
        nextButton.classList.remove('disabled');
        nextButton.removeAttribute('disabled');
    }
}

function validatePuzzle(answer, correctAnswer, clueText) {
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        showClue(clueText);
        enableNextButton();
        return true;
    }
    return false;
}