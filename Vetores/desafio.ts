function inverterOrdem(...numbers: number[]): void { // pegando o array

  function inverterRecursivo(numbers: number[], index: number): void { // inicia o processo de inversão e impressão dos elementos
    if (index >= 0) {
      console.log(numbers[index]); 
      
      inverterRecursivo(numbers, index - 1); 
    }
  }

  inverterRecursivo(numbers, numbers.length - 1); 
}

inverterOrdem(1, 2, 3, 4, 5);

//Função Principal (inverterOrdem): É responsável por iniciar o processo de inversão dos elementos. Ela prepara o ambiente chamando inverterRecursivo com o índice inicial do último elemento.
// Função Recursiva (inverterRecursivo):Faz o trabalho de imprimir os elementos em ordem inversa. Ela faz isso acessando o elemento no índice atual e então chama a si mesma com um índice decrementado.