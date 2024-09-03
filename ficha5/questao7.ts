function maiorSoma(array1: number[], array2: number[]): void {
  
  let somaArray1 = array1.reduce((a, b) => a + b);
  let somaArray2 = array2.reduce((a, b) => a + b);

  if (somaArray1 > somaArray2) {
    console.log(
      `A soma do array1 é igual a ${somaArray1} e é maior que a soma do array2 (${somaArray2})`
    );
  } else {
    console.log(
      `A soma do array2 é igual a ${somaArray2} e é maior que a soma do array1 (${somaArray1}))`
    );
  }
}

console.log(maiorSoma([4, 8, 19, 22, 55], [19, 99, 2] ))