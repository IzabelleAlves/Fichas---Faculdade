function transcricao (array1: string[][], array2: string[][]): string[][] | null{
  if (array1.length != array2.length){
    return null
  }

  for (let i = 0; i < array1.length; i++){
    if (array1[i].length != array2[i].length){
      return null
    }
    for (let j = 0; j < array1[i].length; j++){
      array2[j][i] = array1[i][j]
    }
  }
  return array2
}

let arrayUm: string[][] = [
  ['lasanha', 'uva'],
  ['maçã', 'banana']
]

let arrayDois: string[][] = [
  ['', ''],
  ['', '']
]

console.log(transcricao(arrayUm, arrayDois))