/*Dados quatro notas, computar e classificar o valor da 
média das notas de um  estudante como aprovado (> 6), reprovado (< 4) 
e recuperação (caso contrário);*/

let notaJoao = 10

if (notaJoao < 4) {
    console.log('Reprovado!')
} else if (notaJoao > 4 && notaJoao < 6) {
    console.log('Recuperação')
} else {
    console.log('Aprovado!!')
}