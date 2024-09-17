//Receber como parâmetro quatro números e retornar o valor da soma dos seus quadrados;

function soma(x, y){
    return x + y
}

let a = [2, 4, 6, 8]
let quadrado = a.map(x => x**2)
let somaQuadrado = quadrado.reduce(soma)

console.log(somaQuadrado)