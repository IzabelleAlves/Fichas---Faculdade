function dividir (array: number[][]): number[][]{
  let numDivisor: number = 10
  let arrayDividido: number[][] = []
  
  for (let i = 0; i < array.length; i++){
    arrayDividido[i] = []
    for (let j = 0; j < array[i].length; j++){
      arrayDividido[i][j] = array[i][j] / numDivisor
    }
  }
  return arrayDividido
}

let array5: number [][] = [
  [20, 30, 40],
  [50, 60, 70]
]
console.log(dividir(array5))