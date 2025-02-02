//Testar se um número é primo ou não é primo

let numA: number = 17;
let cont: number = 0;

for (let i = 1; i <= numA; i++) {
  if (numA % i == 0) {
    cont++; // se o numero for primo, o contador vai contar apenas dois. Pois, é quando ele é
    // divisível por 1 ou por ele mesmo. Ou seja, o valor de cont será 2 quando o número for primo.
  }
}
if (cont == 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
