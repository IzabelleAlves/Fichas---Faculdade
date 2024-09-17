function soma (...numbers: number[]): number{
  let resultado = numbers.reduce((a, b) => a + b);

  return resultado
}

console.log(soma(2, 7, 9, 12, 14));
