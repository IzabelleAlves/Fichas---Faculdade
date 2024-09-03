function copiaInversa1(array: number[], arrayPosCopia: number[]): number[] {
  array.reverse();

  for (let i = 0; i < array.length; i++) {
    arrayPosCopia[i] = array[i];
  }

  return arrayPosCopia
}
//OU

function copiaInversa2(array: number[], arrayPosCopia: number[]): number[] {
  let j: number = 0
  for (let i = array.length - 1; i >= 0; i--) {
    arrayPosCopia[j] = array[i];
    j++
  }
  
  return arrayPosCopia
}

console.log(copiaInversa1([1, 3, 5, -2], [1, 4, 3, 20]))
console.log(copiaInversa2([1, 3, 5, -2], [1, 4, 3, 20]))