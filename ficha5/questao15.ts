function falsosOuVerdadeiros2 (...booleans: boolean[]): boolean{
  let retorno = booleans.some(value => value == true)
  
  return retorno
}

console.log(falsosOuVerdadeiros2(false, true, true, true))