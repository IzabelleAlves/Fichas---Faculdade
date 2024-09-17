//Imprimir os 20 primeiros números divisíveis por 3;

let contador = 0

for (let i = 1; ; i ++) {
    if (i % 3 == 0) {
        console.log(i)
        contador ++
    }  if (contador == 20) {
        break;
    }
}