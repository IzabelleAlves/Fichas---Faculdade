function criarArray (linhas: number, colunas: number): number[][]{
  let criandoArray: number[][] = []

  for (let i = 0; i < linhas; i++){
    criandoArray[i] = []
    for (let j = 0; j < colunas; j++){
      criandoArray[i][j] = -1
    }
  }

  return criandoArray
}

console.log(criarArray(4, 4))