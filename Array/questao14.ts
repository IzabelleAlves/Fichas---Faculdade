function media (array: number[][]): number{
  let soma: number = 0
  let media: number = 0
  let totalElements: number = 0
  let totalAcimaMedia: number = 0

  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      soma += array[i][j]
      totalElements++
    }
  }
  media = soma / totalElements
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] > media){
        totalAcimaMedia++
      }
    }
  }
  return totalAcimaMedia
}

let arrays: number[][] = [
  [9, 10, 8,5],
  [3, 5, 6]
]

console.log(media(arrays))