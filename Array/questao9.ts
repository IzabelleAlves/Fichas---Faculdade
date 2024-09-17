function copiarArray (arrayOriginal: number[][], arrayCopia: number[][]): number[][] | null{
  if (arrayOriginal.length != arrayCopia.length){
    console.log("O arrayCopia deve ter o mesmo número de linhas que o arrayOriginal.");
    return null
  }

  for (let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i].length != arrayCopia[i].length){
      console.log("O arrayCopia deve ter o mesmo número de linhas que o arrayOriginal.");
      return null
    }
    for (let j = 0; j < arrayOriginal[i].length; j++){
      arrayCopia[i][j] = arrayOriginal[i][j]
    }
  }
  return arrayCopia
}

let arrayOriginal: number[][] = [
  [3, 5, 7],
  [9, 11, 13]
]

let arrayCopia: number[][] = [
  [20, 30, 40],
  [50, 60, 70]
]

console.log(copiarArray(arrayOriginal, arrayCopia))