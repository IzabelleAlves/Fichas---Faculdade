//Testar se o fatorial de um número é primo. 

let a = 3
fat = 1 // vai dar o resultado da fatoração
let cont = 0

for (let i = 1; i <= a; i++) {
    fat *= i
    if (fat % i == 0) {
        cont++ // se o numero for primo, o contador vai contar apenas dois. Pois, é quando ele é
        // divisível por 1 ou por ele mesmo. Ou seja, o valor de cont será 2 quando o número for primo. 
    }
} console.log('O valor de', a, 'fatorado é:', fat) 

if (cont == 2) {
    console.log(fat,'é um número primo')
} else {
    console.log(fat,'não um número primo')
}