//Dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let a = 9
let b = 3
contador = 0


for (let i = 0; a >= b; i++) { //enquanto A for maior que B a divisão pode ocorrer
    a -= b
    contador++ // ele vai contar quantas vezes o divisor pôde ser subtraído do dividendo
} console.log(contador)