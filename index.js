document.addEventListener('DOMContentLoaded', function(){
    const textInput = document.getElementById('textInput');
    const characterCount = document.getElementById('characterCount');
    const characterCountNoSpace = document.getElementById('characterCountNoSpace');
    const wordCount = document.getElementById('wordCount');
    const numberCount = document.getElementById('numberCount');
    const numberSum = document.getElementById('numberSum');
    const averageLength = document.getElementById('averageLength');
    const clearButton= document.getElementById('clearButton')


    function contarPalabras(texto){
        texto = texto.trim();
        if(texto === ''){
            return 0;
        }
        const wordsArray = texto.split(/\s+/);
        return wordsArray.length;
    }

    function updateCounts(){
        const texto = textInput.value; // Corregido de ariaValue a value

        // Contar caracteres
        characterCount.textContent = texto.length;

        // Contar caracteres sin espacios
        characterCountNoSpace.textContent = texto.replace(/\s/g, '').length;

        // Contar palabras
        wordCount.textContent = contarPalabras(texto);

        // Contar números y sumarlos
        const numbers = texto.match(/\d+/g) || [];
        numberCount.textContent = numbers.length;

        const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
        numberSum.textContent = sum;

        // Calcular promedio de longitud de palabras
        const words = texto.split(/\s+/).filter(word => word.length > 0);
        const avgLength = words.length > 0 ? texto.replace(/\s/g, '').length / words.length : 0;
        averageLength.textContent = parseInt(avgLength.toFixed(2));
    }

    function clearMetrics(){
        textInput='';
        wordCount.textContent='0';
        characterCount.textContent='0'
        characterCount.textContent='0'
        characterCountNoSpace.textContent='0' 
        wordCount.textContent='0' 
        numberCount.textContent='0'
        numberSum.textContent='0'
        averageLength.textContent='0'
     
    }

    textInput.addEventListener('input', updateCounts);
    clearButton.addEventListener('click', clearMetrics)
    // Inicializar contadores
    updateCounts();
});
