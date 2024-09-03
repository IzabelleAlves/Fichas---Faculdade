function multiElementos(array: number[], arrayPosCopia: number[]): number[] {
  let arrayMultiplicado: number[]= []

  for (let i = 0; i < array.length; i++) {
    arrayMultiplicado.push(array[i] * arrayPosCopia[i])
  }

  return arrayMultiplicado
}

console.log(multiElementos([2, 6, 8, 10], [2, 6, 8, 10]))