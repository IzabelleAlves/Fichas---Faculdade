//Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

function par(...numbers: number[]): void {
  let contador: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      contador++;
    }
  }
  console.log(contador);
}

par(4, 8, 7, 18); // Saída: 3
