//Testar se um número é primo utilizando apenas funções (não é permitido o uso de laços).

let contador = 0;

function primos(num, i = 1) {
    if (i <= num) {
        if (num % i == 0) {
            contador++
        }
        return primos(num, i + 1);
    }
}
primos(11);

if (contador == 2) {
    console.log('É primo');
} else {
    console.log('Não é primo');
}
