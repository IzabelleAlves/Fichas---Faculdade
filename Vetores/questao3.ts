function copia (array: number[], arrayPosCopia: number[]): number[]{
  for (let i = 0; i < array.length; i++){
    arrayPosCopia[i] = array[i]
  }

  return arrayPosCopia
}

console.log(copia([3, 7, 9, 18, 22], [1, 4, 3, 20, 12]))