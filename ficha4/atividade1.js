//Receber quatro números como parâmetro e retornar a média dos quatro como resultado;

function soma(x, y) {
    return x + y
}

let r = [7, 2, 4, 8]
let r1 = r.reduce(soma)
let media = r1 / r.length
console.log(media)