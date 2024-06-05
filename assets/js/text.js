const generateRandomNumber = (min, max) => {
    // Gera um número inteiro aleatório entre min (inclusive) e max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomNumbers = (count, min, max) => {
    // Gera um array com 'count' números aleatórios entre min e max
    const randomNumbers = [];
    
    if (count <= 0) {
        throw new Error("A contagem deve ser um número inteiro positivo.");
    }

    for (let i = 0; i < count; i++) {
        randomNumbers.push(generateRandomNumber(min, max));
    }

    return randomNumbers;
};

const findMinMax = (numbers) => {
    // Encontra os valores mínimo e máximo em um array de números
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("A entrada deve ser um array não vazio de números.");
    }

    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);

    return { min: minValue, max: maxValue };
};

try {
    const numberOfRandomNumbers = 20;
    const minRange = 1;
    const maxRange = 100;

    // Gera um array de números aleatórios
    const randomNumbers = generateRandomNumbers(numberOfRandomNumbers, minRange, maxRange);

    // Encontra os valores mínimo e máximo no array
    const { min, max } = findMinMax(randomNumbers);

    // Retorna o resultado
    return { menor: min, maior: max };
} catch (error) {
    console.error(`Erro: ${error.message}`);
    return { error: error.message };
}