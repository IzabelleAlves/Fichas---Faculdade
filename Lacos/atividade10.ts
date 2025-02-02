//Computar o resto da divisão de dois números sem utilizar o operador %;

/*aqui a ideia é parecida com o da divisão sem o operador "/". A diferença é que
o resultado da divisão é dada pelo contador - que vai contar quantas vezes tiramos o divisor do
dividendo. Já para computar o resto da divisão, pegamos o valor que sobrar do próprio dividendo
após a subtração*/

let numberAA: number = 7;
let numberBB: number = 2;
let contador: number = 0;

for (let i = 0; numberAA >= numberBB; i++) {
  //enquanto A for maior que B a divisão pode ocorrer
  numberAA -= numberBB;
  contador++;
}
console.log(numberAA);

//console.log(contador) se quiser o resultado da divisão
//console.log(a) se quiser o resto da divisão
