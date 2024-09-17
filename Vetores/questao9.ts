function soma (...numbers: number[]): boolean{
  return numbers.reduce((a, b)=> a + b) > 0
}

console.log(soma(2, 5, 8))