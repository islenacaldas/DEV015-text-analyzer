const analyzer = {
  getWordCount: (text) => {
    if(text.length===0) return 0;
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[\s\W]/g, "").length;
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") return 0;

    let totalLength = 0;
    for (const word of words) {
      totalLength += word.length;
    }
    return Number((totalLength / words.length).toFixed(2));
  },

  getNumberCount: (text) => {
    let count = 0;
    let inNumber = false;
      
    for (let i = 0; i < text.length; i++) {
      if (/[0-9]/.test(text[i])) {
        if (!inNumber) {
          // Verificar si es un número válido
          let j = i;
          while (j < text.length && /[0-9.]/.test(text[j])) {
            j++;
          }
          if (j === text.length || !/[a-zA-Z]/.test(text[j])) {
            count++;
            inNumber = true;
          }
        }
      } else if (text[i] !== '.') {
        inNumber = false;
      }
    }
      
    return count;
  },
  
  getNumberSum: (text) => {
    let sum = 0;
    let currentNumber = "";
    let isValidNumber = true;
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= "0" && char <= "9") {
        currentNumber += char;
      } else if (char === "." && currentNumber !== "" && !currentNumber.includes(".")) {
        currentNumber += char;
      } else {
        if (currentNumber !== "" && isValidNumber) {
          sum += parseFloat(currentNumber);
        }
        currentNumber = "";
        isValidNumber = true;
      }
  
      // Verificar si el siguiente carácter es una letra
      if (currentNumber !== "" && i + 1 < text.length && /[a-zA-Z]/.test(text[i + 1])) {
        isValidNumber = false;
      }
    }
  
    // Procesar el último número si existe
    if (currentNumber !== "" && isValidNumber) {
      sum += parseFloat(currentNumber);
    }
  
    return sum;
  },
  
};

export default analyzer;
