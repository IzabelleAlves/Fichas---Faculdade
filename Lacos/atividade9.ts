//Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let aNumber: number = 9;
let bNumber: number = 3;
let contador: number = 0;

for (let i = 0; aNumber >= bNumber; i++) {
  aNumber -= bNumber;
  contador++; // ele vai contar quantas vezes o divisor pôde ser subtraído do dividendo
}
console.log(contador);
