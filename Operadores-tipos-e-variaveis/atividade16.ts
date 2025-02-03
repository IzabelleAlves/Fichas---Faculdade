//Trocar o valor de duas variáveis; Se a = x e b = y, ao fim do programa a = y e b = x.

let a: number = 5;
let b: number = 7;
let x: number = 5;
let y: number = 7;

if (a == x && b == y) {
  a = y;
  b = x;
  console.log(a, b);
} else {
  console.log("Inválido");
}
