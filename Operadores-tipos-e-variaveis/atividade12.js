//Escolher o maior entre os números 
let a = [27, 6, 188]
let maior = a[0]

for (i = 1; i < a.length; i++) {
    if (a[i] > maior) {
        maior = a[i]
    }
} console.log(maior)
