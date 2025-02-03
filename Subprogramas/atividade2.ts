//Receber um número como parâmetro e retornar true se ele for divisível 7 e false caso contrário;

function divisivel(x: number): boolean {
  return x % 7 === 0;
}

console.log(divisivel(14));
