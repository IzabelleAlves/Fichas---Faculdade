function somar (array: number[][]): boolean {
  let soma: number = 0
  
  for (let i = 0; i < array1.length; i++){
    for (let j = 0; j < array1[i].length; j++){
      soma += array[i][j]
    }
  }
  return soma > 0
}

let array1: number[][] = [
  [3, 7, 9],
  [1, 1, 1]
]

console.log(somar(array1))