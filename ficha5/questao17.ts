function ordemInvertida1 (...array: number[]): number[] {
  return array.reverse()
}

console.log(ordemInvertida1(1, 3, 5, -2))

//ou

function ordemInvertida2(...array: number[]): number[] {
  let ordemInvertida: number[] = []
  for (let i = array.length - 1; i >= 0; i--) {
    ordemInvertida.push(array[i])
  }
  
  return ordemInvertida
}

console.log(ordemInvertida2(1, 3, 5, -2))