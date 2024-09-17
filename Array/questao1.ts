function multi(array: number[][]): number[][] {
  let novoArray: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    novoArray[i] = [];  
    for (let j = 0; j < array[i].length; j++) {
      novoArray[i][j] = array[i][j] * 2; 
    }
  }
  return novoArray;
}

let array: number[][] = [
  [2, 2, 2],
  [2, 2, 2]
];

console.log(multi(array));
