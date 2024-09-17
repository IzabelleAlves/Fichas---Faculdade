function imparPar (array: number[][]): void {
  let totalImpares: number = 0
  let totalPares: number = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] % 2 == 0){
        totalImpares += 1
      } else {
        totalPares += 1
      }
    }
  }
  console.log(`O total de números ímpares é ${totalImpares} e o total de números pares é ${totalPares}`)
}

let array3: number[][] = [
  [3, 7, 12, 0, 1],
  [2, 7, 9, 2, 10]
]

imparPar(array3)