//Receber três números como parâmetros e imprimi-los em ordem crescente;

function ordem(a: number, b: number, c: number): void {
  let crescente: number[] = [a, b, c];
  crescente.sort((x, y) => x - y);
  console.log("Números em ordem crescente:", crescente);
}

ordem(22, 13, 44);
