const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/ /g, '').length;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") return 0;

    let totalLength = 0;
    for (const word of words) {
      totalLength += word.length;
    }
   return parseInt(totalLength / words.length);
   
  },

  getNumberCount: (text) => { 
    let count = 0;
    for (let i=0; i<text.length; i++) {
      if (text[i] ===Number) {
        count++;
      }
    }
    return count;
  },

  getNumberSum: (text) => {
    // Sumar todos los números encontrados en el texto
    let sum = 0;
    let currentNumber = '';

    for (const char of text) {
      if (char >= '0' && char <= '9') {
        currentNumber += char;
      } else if (currentNumber !== '') {
        sum += parseInt(currentNumber);
        currentNumber = ''; 
      }
    }

    if (currentNumber !== '') {
      sum += parseInt(currentNumber);
    }

    return sum;
  },
};

export default analyzer;
