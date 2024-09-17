let arrayA: boolean[][] = [
  [false, false, false, false],
  [false, false, true, false]
]

function trueFalse (array: boolean[][]): boolean {  
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] == true){
        return true
      } 
    }
  }
  return false
}

console.log(trueFalse(arrayA))