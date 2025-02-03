//Testar se um número é primo utilizando apenas funções (não é permitido o uso de laços).

let contador: number = 0;

function primos(num: number, i: number = 1): void {
  if (i <= num) {
    if (num % i === 0) {
      contador++;
    }
    primos(num, i + 1);
  }
}

primos(11);

if (contador === 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}
