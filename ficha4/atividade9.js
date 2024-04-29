//Receber como parâmetro três números e retornar o maior e o menor valor entre eles;

let n = [4, 8, 12] 
let maior = Math.max(...n)
let menor = Math.min(...n)

console.log('O maior número é', maior)
console.log('O menor número é', menor) 

//ou com função para descobrir o maior: 

function maior(...numbers){
    let m = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > m) {
            m = numbers[i]
        }
    }
    console.log(m)
}
maior(7, 38, 2, 24)