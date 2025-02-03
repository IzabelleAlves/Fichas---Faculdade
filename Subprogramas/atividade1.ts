//Receber quatro números como parâmetro e retornar a média dos quatro como resultado;

function soma(x: number, y: number): number {
  return x + y;
}

let r: number[] = [7, 2, 4, 8];
let r1: number = r.reduce(soma);
let media: number = r1 / r.length;

console.log(media);
