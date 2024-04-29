//Dados três números, encontrar qual deles é o mais próximo da média aritmética dos mesmos.

function calcularMedia(numbers) {
    function soma(a, b) {
        return a + b;
    }
    let somar = numbers.reduce(soma);
    let mediaAritmetica = somar / numbers.length;

    return mediaAritmetica;
}
function encontrarMaisProximo(numbers, mediaAritmetica) {
    let diferencas = numbers.map(x => Math.abs(x - mediaAritmetica));
    let menorDiferenca = Math.min(...diferencas);
    let indiceMenorDiferenca = diferencas.indexOf(menorDiferenca);

    return numbers[indiceMenorDiferenca];
}
function media(...numbers) {
    let mediaAritmetica = calcularMedia(numbers);
    console.log('O valor da média é', mediaAritmetica.toFixed(1));

    let maisProximo = encontrarMaisProximo(numbers, mediaAritmetica);
    return maisProximo;
}
console.log('O valor mais aproximado da média é', media(8, 10, 14));