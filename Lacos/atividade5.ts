//Imprimir os 10 primeiros números divisíveis por 10;

let contadorA: number = 0;

for (let i = 1; ; i++) {
  if (i % 10 == 0) {
    console.log(i);
    contadorA++;
  }
  if (contadorA == 10) {
    break;
  }
}
