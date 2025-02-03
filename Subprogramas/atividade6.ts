//Receber três números como parâmetros e imprimir aqueles que
//são múltiplos de 2 e de 3 ao mesmo tempo;

function multiplos(...numbers: number[]): void {
  let contador = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] % 3 === 0) {
      console.log(numbers[i]);
      contador++;
    }
  }
  if (contador === 0) {
    console.log(
      "Nenhum dos números fornecidos é múltiplo de 2 e de 3 ao mesmo tempo."
    );
  }
}

multiplos(6, 12, 18);
