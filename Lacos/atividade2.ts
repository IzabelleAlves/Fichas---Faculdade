// Imprimir os números de 3 e 3, de 0 até 30 e depois de 3 e 3, de 0 até -30;

//de 0 até 30
let numberA: number = 30;

for (let i = 0; i <= numberA; i++) {
  console.log(i);
  i += 2;
}

//de 0 até -30
let numberB: number = -30;

for (let i = 0; i >= numberB; i--) {
  console.log(i);
  i -= 2;
}
