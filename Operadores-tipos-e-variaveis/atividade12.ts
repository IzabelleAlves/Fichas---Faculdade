//Escolher o maior entre os números
let a: number[] = [27, 6, 188];
let maior: number = a[0];

for (let i = 1; i < a.length; i++) {
  if (a[i] > maior) {
    maior = a[i];
  }
}
console.log(maior);
