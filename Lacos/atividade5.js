//Imprimir os 10 primeiros números divisíveis por 10;

let contador = 0

for (let i = 1; ;i++) {
    if (i % 10 == 0){
        console.log(i) 
        contador ++
    } if (contador == 10) {
        break;
    }
}