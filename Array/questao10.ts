function tresArray (array1: number[][], array2: number[][], array3: number[][]): number[][] | null {
  if (array1.length != array2.length || array1.length !== array3.length){
    return null
  }

  for (let i = 0; i < array1.length; i++){
    if (array1[i].length != array2[i].length || array1[i].length != array3[i].length){
      return null
    }
    for (let j = 0; j < array1[i].length; j++){
      array3[i][j] = array1[i][j] + array2[i][j]
    }
  }
  return array3
}

let arrayPosicao1: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

let arrayPosicao2: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
]

let arrayPosicao3: number[][] = [
  [0, 0, 0],
  [0, 0, 0]
]

console.log(tresArray(arrayPosicao1, arrayPosicao2, arrayPosicao3))