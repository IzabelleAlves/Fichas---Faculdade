//Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;

function soma(x: number, y: number): number {
  return x + y;
}

let a: number[] = [2, 4, 6, 8];
let quadrado: number[] = a.map((x) => x ** 2);
let somaQuadrado: number = quadrado.reduce(soma);

console.log(somaQuadrado);
