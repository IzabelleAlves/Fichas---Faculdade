function media (array3D: number[][][]): number{
  let media: number = 0
  let totalElementos: number = 0;

  for (let i = 0; i < array3D.length; i++) {  
    for (let j = 0; j < array3D[i].length; j++) {
      for (let k = 0; k < array3D[i][j].length; k++) {  // Percorre as colunas dentro da linha
        media += array3D[i][j][k]
        totalElementos++
      }
    } // Linha em branco para separar as camadas
  }
  return media / totalElementos
}

let array3D: number[][][] = [
  [  
    [1, 2, 3],  
    [4, 5, 6]   
  ],
  [ 
    [7, 8, 9], 
    [10, 11, 12] 
  ]
];

console.log(media(array3D)); 