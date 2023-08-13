const chooseButton = document.getElementById('choose-pattern');
const patternList = document.getElementById('pattern-list');
const selectedPattern = document.getElementById('selected-pattern');
const selectedImage = document.getElementById('selected-image');

chooseButton.addEventListener('click', () => {
    patternList.classList.toggle('hidden');
    selectedPattern.classList.add('hidden');
});


const selectedPatternTitle = document.getElementById('selected-pattern-title');

const patterns = document.querySelectorAll('.pattern');
patterns.forEach(pattern => {
    pattern.addEventListener('click', () => {
        selectedImage.src = pattern.querySelector('img').src;
        selectedPattern.classList.remove('hidden');
        patternList.classList.add('hidden');
        
        const patternTitle = pattern.querySelector('p').textContent;
        selectedPatternTitle.textContent = patternTitle; // Postavite naslov odabrane slike
    });
});

