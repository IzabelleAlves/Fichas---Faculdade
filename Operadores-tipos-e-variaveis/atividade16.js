//Trocar o valor de duas variáveis; Se a = x e b = y, ao fim do programa a = y e b = x.

let a = 5
let b = 7 
let x = 5
let y = 7

if (a == x && b == y) {
    a = y 
    b = x
    console.log(a, b)
} else {
    console.log('Inválido')
}