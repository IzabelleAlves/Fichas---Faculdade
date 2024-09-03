function arraysIguais(array1: number[], array2: number[]): void {
  if (array1.length != array2.length) {
    console.log(`false`);
  } else if (array1.every((a, i) => a == array2[i])) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}

console.log(arraysIguais([2, 5, 7, 9],[1, 5, 7, 9]))