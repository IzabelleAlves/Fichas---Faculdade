function iguais(array1: number[][], array2: number[][]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++){
    if (array1[i].length !== array2[i].length) {
      return false;
    }
    for (let j = 0; j < array1[i].length; j++){
      if (array1[i][j] != array2[i][j]){
        return false
      }
    }
  }
  return true
}

let arrayIgual1: number[][] = [
  [2, 4, 6, 8],
  [2, 4, 6, 8]
]
let arrayIgual2: number[][] = [
  [2, 4, 7, 8],
  [2, 4, 6, 8]
]

console.log(iguais(arrayIgual1, arrayIgual2))