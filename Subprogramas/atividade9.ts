//Receber como parâmetro três números e retornar o maior e o menor valor entre eles;

let n: number[] = [4, 8, 12];
let maior: number = Math.max(...n);
let menor: number = Math.min(...n);

console.log("O maior número é", maior);
console.log("O menor número é", menor);

//ou com função para descobrir o maior:

function maiorNumero(...numbers: number[]): void {
  let m: number = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > m) {
      m = numbers[i];
    }
  }
  console.log(m);
}

maiorNumero(7, 38, 2, 24);
