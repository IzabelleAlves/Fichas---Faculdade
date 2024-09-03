function falsosOuVerdadeiros (...booleans: boolean[]): boolean{
  let retorno = booleans.every(value => value == true)
  
  return retorno
}

console.log(falsosOuVerdadeiros(false, true, true, true))