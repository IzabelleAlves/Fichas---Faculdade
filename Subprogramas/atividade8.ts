//Receber dois parâmetros e retornar true se o primeiro ou
//o segundo forem negativos, e false, caso contrário;

function negativos(a: number, b: number): void {
  console.log(a < 0 || b < 0);
}

negativos(8, -7);
