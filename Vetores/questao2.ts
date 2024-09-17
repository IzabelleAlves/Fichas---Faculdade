function multiVetorNumero(parametro: number, ...numbers: number[]): number[]{

  return numbers.map(index => index * parametro)
}

console.log([2, 7, 9, 12, 14])
console.log(multiVetorNumero(2, 2, 7, 9, 12, 14))