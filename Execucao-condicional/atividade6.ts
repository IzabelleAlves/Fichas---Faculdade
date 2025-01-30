//Imprimir em ordem crescente;

let n: number[] = [9, 12, 0, 8, 1];
n.sort(function (a, b) {
  return a - b;
});
console.log(n);

//Imprimir em ordem decrescente;

let n1: number[] = [9, 12, 0, 8, 1];
n1.sort(function (a, b) {
  return b - a;
});
console.log(n1);
