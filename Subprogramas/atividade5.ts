//Computar e retornar o valor de f(x) nas seguintes funções matemáticas: f(x) = x² + 2x + 3
// e f(x) = x³ - 4x + 1;

function equacao(x: number): number {
  return x ** 2 + 2 * x + 3;
}

console.log("Valor da primeira equação: " + equacao(12));

function equacao1(x: number): number {
  return x ** 3 - 4 * x + 1;
}

console.log("Valor da segunda equação: " + equacao1(12));
