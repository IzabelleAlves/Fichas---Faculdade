function subtrair(array: number[][]): number[][]{
  let num: number = 10
  let arraySubtraido: number[][] = []

  for (let i = 0; i < array.length; i++){
    arraySubtraido[i] = []
    for (let j = 0; j < array[i].length; j++){
      arraySubtraido[i][j] = array[i][j] - num
    }
  }
  return arraySubtraido
}

let array4: number[][] = [
  [20, 30, 40],
  [50, 60, 70]
]

console.log(subtrair(array4))