function somaVetores(array1: number[], array2: number[], array3: number[]): number[] {
  
  if (array1.length == array2.length){
    for (let i = 0; i < array1.length; i++) {
      array3[i] = array1[i] + array2[i];
    }
  }
  return array3
}

console.log(somaVetores([5, 8, 9, 10, 22],[5, 8, 9, 10, 22], []));