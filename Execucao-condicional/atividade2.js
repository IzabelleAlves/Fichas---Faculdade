//A- Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s e else’s);

let a = 24

if (a % 3 == 0 && a % 4 == 0) {
    console.log(a, 'é divisível por 3 e por 4.')
} else {
    console.log(a, 'não é divisível por 3 e por 4 ao mesmo tempo.')
}

//B- Testar se um número é divisível por 3 mas não por 4;
let b = 18

if (b % 3 == 0 && b % 4 != 0) {
    console.log(b, 'é divisível por 3, mas não é divisível por 4.')
} else {
    console.log('Inválido')
}

//C- Testar se um número é divisível por 2 ou por 7 

let c = 23

if (c % 2 == 0 || c % 7 == 0) {
    console.log(c, 'é divisível por 2 ou por 7')
} else {
    console.log('Não é divisível')
}