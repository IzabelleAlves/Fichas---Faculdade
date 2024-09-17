//Receber dois parâmetros e retornar true se o primeiro ou 
//o segundo forem negativos, e false, caso contrário;

function negativos(a, b){
    if (a < 0 || b < 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
negativos(8, -7)