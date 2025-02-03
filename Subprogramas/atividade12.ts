//Dados três números, encontrar qual deles é o mais próximo da média aritmética dos mesmos.

function calcularMedia(numbers: number[]): number {
  function soma(a: number, b: number): number {
    return a + b;
  }
  let somar: number = numbers.reduce(soma);
  let mediaAritmetica: number = somar / numbers.length;

  return mediaAritmetica;
}

function encontrarMaisProximo(
  numbers: number[],
  mediaAritmetica: number
): number {
  let diferencas: number[] = numbers.map((x) => Math.abs(x - mediaAritmetica));
  let menorDiferenca: number = Math.min(...diferencas);
  let indiceMenorDiferenca: number = diferencas.indexOf(menorDiferenca);

  return numbers[indiceMenorDiferenca];
}

function media(...numbers: number[]): number {
  let mediaAritmetica: number = calcularMedia(numbers);
  console.log("O valor da média é", mediaAritmetica.toFixed(1));

  let maisProximo: number = encontrarMaisProximo(numbers, mediaAritmetica);
  return maisProximo;
}

console.log("O valor mais aproximado da média é", media(8, 10, 14));
