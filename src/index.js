import analyzer from './analyzer.js';

const textArea = document.querySelector('textarea[name="user-input"]');
const metricsElements = {
  characters: document.getElementById('characterCount'),
  charactersNoSpaces: document.getElementById('characterNoSpaceCount'),
  words: document.getElementById('wordCount'),
  numbers: document.getElementById('numberCount'),
  numberSum: document.getElementById('numberSum'),
  averageLength: document.getElementById('averageLength')
};

textArea.addEventListener('input', updateMetrics);

function updateMetrics() {
  const text = textArea.value;
  metricsElements.characters.textContent = analyzer.getCharacterCount(text);
  metricsElements.charactersNoSpaces.textContent = analyzer.getCharacterCountExcludingSpaces(text);
  metricsElements.words.textContent = analyzer.getWordCount(text);
  metricsElements.numbers.textContent = analyzer.getNumberCount(text);
  metricsElements.numberSum.textContent = analyzer.getNumberSum(text);
  metricsElements.averageLength.textContent = analyzer.getAverageWordLength(text).toFixed(2);
}

document.getElementById('clearButton').addEventListener('click', () => {
  textArea.value ='';
  updateMetrics();
});

// Inicializar métricas
updateMetrics();
