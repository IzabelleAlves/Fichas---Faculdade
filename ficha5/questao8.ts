function notas (...entradaNotas: number[]): number{

  let media = (entradaNotas.reduce((a, b) => a + b) / entradaNotas.length);
  let contador = 0;
  
  for (let i of entradaNotas) {
    if (i > media) {
      contador++;
    }
  }
  return contador
}

console.log(notas(7, 8, 2, 9, 1, 5, 7))