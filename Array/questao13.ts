function maiorSomaArray (array1: number[][], array2: number[][]): string {
  let somaArray1: number = 0
  let somaArray2: number = 0

  for (let i = 0; i < array1.length; i++){
    for (let j =0; j < array1[i].length; j++){
      somaArray1 += array1[i][j]
    }
  }

  for (let i = 0; i < array2.length; i++){
    for (let j =0; j < array2[i].length; j++){
      somaArray2 += array2[i][j]
    }
  }

  return somaArray1 > somaArray2 ? `O array1: "${array1}" tem a soma: ${somaArray1} e é maior que o array2 "${array2}", que tem a soma igual a${somaArray2}` : `O array2: "${array2}" tem a soma: ${somaArray2} e é maior que o array1 "${array1}", que tem a soma igual a ${somaArray1}`

}

let arraySoma1: number [][] = [
  [45, 30, 27],
  [30, 60, 70]
]

let arraySoma2: number [][] = [
  [20, 77, 24],
  [5, 60, 70]
]

console.log(maiorSomaArray(arraySoma1, arraySoma2))